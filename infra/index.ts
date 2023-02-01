#!/usr/bin/env node
import "source-map-support/register";
import * as cdk from "aws-cdk-lib";
import * as getBranch from "git-branch";
import { devConfig } from "./config/dev.config";
import { productionConfig } from "./config/production.config";
import { TestStack } from "./lib/stack";
import { CDKContext, EnvironmentConfig, Environment } from "./helpers/types";
import { App } from "aws-cdk-lib";
import { stagingConfig } from "./config/staging.config";

const app: App = new cdk.App();

function getConfig(environment: Environment): EnvironmentConfig {
  switch (environment) {
    case Environment.DEV:
      return devConfig;
    case Environment.PROD:
      return productionConfig;
    case Environment.STAGING:
      return stagingConfig;
    default:
      return devConfig;
  }
}

async function getContext(
  app: cdk.App,
  environment: Environment
): Promise<CDKContext> {
  return new Promise(async (resolve, reject) => {
    try {
      const config: EnvironmentConfig = getConfig(environment);
      const branch = await getBranch();
      const globals = app.node.tryGetContext("globals");
      return resolve({ ...globals, ...config, branch, environment });
    } catch (error) {
      console.error(error);
      return reject();
    }
  });
}

async function createEnv(app: App, environment: Environment) {
  try {
    const context = await getContext(app, environment);
    const stackName = `${context.name}-${context.appName}`;
    const stackProps: cdk.StackProps = {
      env: {
        account: process.env.CDK_DEFAULT_ACCOUNT,
        region: process.env.CDK_DEFAULT_REGION,
      },
      stackName,
      description: `${context.name}-${context.appName}-stack`,
      tags: {
        StackPrefix: stackName,
        Environment: environment,
      },
    };
    new TestStack(app, stackName, stackProps, context);
  } catch (error) {
    console.error(error);
  }
}

async function createStacks() {
  await createEnv(app, Environment.DEV);
  await createEnv(app, Environment.STAGING);
  await createEnv(app, Environment.PROD);
}

createStacks();
