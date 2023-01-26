import * as cdk from "aws-cdk-lib";
import { Stack, StackProps } from "aws-cdk-lib";
import { LambdaConstruct } from "./constructs/lambda-construct";
import { CDKContext } from "../helpers/types";
import { ApiConstruct } from "./constructs/api-construct";
import { getStackName } from "../helpers";
import * as ec2 from "aws-cdk-lib/aws-ec2";
import { stackConfig } from "../helpers/stackConfig";

export class TestStack extends Stack {
  public readonly appVpc: ec2.IVpc;

  constructor(
    scope: cdk.App,
    id: string,
    props: StackProps,
    context: CDKContext
  ) {
    super(scope, id);
    // The code that defines your stack goes here

    const lambdaStack = new LambdaConstruct(
      this,
      `${stackConfig.lambdaConstructName}-${context.name}`,
      context
    );

    new ApiConstruct(
      this,
      `${stackConfig.apiConstructName}-${context.name}`,
      context,
      {
        env: props.env,
        stackName: getStackName(stackConfig.apiConstructName, context.name),
        tags: props.tags,
        lambdaFunctions: lambdaStack.lambdaFunctions,
      }
    );
  }
}
