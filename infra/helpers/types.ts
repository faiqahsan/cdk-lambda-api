import { StackProps } from "aws-cdk-lib";
import * as cdk from "aws-cdk-lib";
import { HttpMethod } from "aws-cdk-lib/aws-events";

export type EnvironmentConfig = {
  name: string;
  apiSubDomainPrefix: string;
  webappSubDomainPrefix: string;
  rootDomain: string;
  vpnCertificateArn: string;
  branch: string;
  isProduction: boolean;
};
export interface CDKContext extends EnvironmentConfig {
  appName: string;
  environment: Environment;
  branch: string;
}

export type LambdaDefinition = {
  name: string;
  codePath: string; //folder name of the lambda function inside the root lambda folder
  memoryMB?: number; //Max memory allowed to be consumed by lambda
  timeoutMins?: number; //minutes
  envVariables?: Record<any, any>;
};

export type ApiMethod = {
  path: string;
  method: HttpMethod;
  lambdaName: string;
};

export type ApiResource = {
  resource: string;
  methods: ApiMethod[];
};

export interface APIStackProps extends StackProps {
  lambdaFunctions: {
    [key: string]: cdk.aws_lambda.DockerImageFunction;
  };
}

export enum Environment {
  DEV = "dev",
  PROD = "prod",
  STAGING = "staging",
}
