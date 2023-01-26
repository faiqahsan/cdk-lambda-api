import { Duration } from "aws-cdk-lib";
import { DockerImageFunctionProps } from "aws-cdk-lib/aws-lambda";
import { DockerImageCode } from "aws-cdk-lib/aws-lambda";
import { CDKContext, LambdaDefinition } from "../infra/helpers/types";
import { Platform } from "aws-cdk-lib/aws-ecr-assets";
import {
  DEFAULT_LAMBDA_MEMORY_MB,
  DEFAULT_LAMBDA_TIMEOUT_MINS,
} from "../infra/helpers/constants";

// Returns Lambda Function properties with defaults and overwrites
export const getLambdaProps = (
  definition: LambdaDefinition,
  context: CDKContext,
  envVariables: Record<string, string>
): DockerImageFunctionProps => {
  const functionProps: DockerImageFunctionProps = {
    functionName: `${context.name}-${context.appName}-${definition.name}-${context.environment}`,
    code: DockerImageCode.fromImageAsset(
      `./functions/code/${definition.codePath}`,
      {
        platform: Platform.LINUX_AMD64,
      }
    ),
    memorySize: definition.memoryMB
      ? definition.memoryMB
      : DEFAULT_LAMBDA_MEMORY_MB,
    timeout: definition.timeoutMins
      ? Duration.minutes(definition.timeoutMins)
      : Duration.minutes(DEFAULT_LAMBDA_TIMEOUT_MINS),
    environment: envVariables,
  };
  return functionProps;
};
