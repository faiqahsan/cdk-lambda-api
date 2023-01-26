import * as cdk from "aws-cdk-lib";
import * as lambda from "aws-cdk-lib/aws-lambda";
import { CDKContext } from "../../helpers/types";
import { Construct } from "constructs";
import { getLambdaProps } from "../../../functions/util";
import { LambdaDefinitions } from "../../../functions/resources";

export class LambdaConstruct extends Construct {
  public readonly lambdaFunctions: {
    [key: string]: cdk.aws_lambda.DockerImageFunction;
  } = {};

  constructor(scope: Construct, id: string, context: CDKContext) {
    super(scope, id);
    const envVariables = {
      SENDGRID_API_KEY: process.env.SENDGRID_API_KEY ?? "",
    };
    for (const definition of LambdaDefinitions) {
      const functionProps = getLambdaProps(definition, context, {
        ...definition?.envVariables,
        ...envVariables,
      });

      const lambdaFunction = new lambda.DockerImageFunction(
        this,
        `${context.name}-${definition.name}-function`,
        functionProps
      );
      this.lambdaFunctions[definition.name] = lambdaFunction;
    }
  }
}
