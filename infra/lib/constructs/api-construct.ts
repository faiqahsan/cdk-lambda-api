import { CfnOutput } from "aws-cdk-lib";
import * as apigateway from "aws-cdk-lib/aws-apigateway";
import { DockerImageFunction, HttpMethod } from "aws-cdk-lib/aws-lambda";
import { Construct } from "constructs";
import { ApiMethod, APIStackProps, CDKContext } from "../../helpers/types";
import { ApiResources } from "../../../functions/resources";

export class ApiConstruct extends Construct {
  constructor(
    scope: Construct,
    id: string,
    context: CDKContext,
    props: APIStackProps
  ) {
    super(scope, id);

    const backendApi = new apigateway.RestApi(
      this,
      `${context.appName}-api-${context.environment}`,
      {
        description: `${context.appName}-api-${context.environment}`,
        defaultCorsPreflightOptions: {
          allowHeaders: [
            "Content-Type",
            "X-Amz-Date",
            "Authorization",
            "X-Api-Key",
            "X-Amz-Security-Token",
          ],
          allowMethods: ["OPTIONS", "GET", "POST", "PUT", "PATCH", "DELETE"],
          allowCredentials: true,
          allowOrigins: ["*"],
        },
        deployOptions: {
          stageName: context.environment,
        },
      }
    );

    new CfnOutput(this, "backendApi-Url", { value: backendApi.url });
    // Loop through apiResources and create resources to the root and api and add methods in each resource
    ApiResources.forEach((item) => {
      const resource = backendApi.root.addResource(item.resource);
      item.methods.forEach((method: ApiMethod) => {
        if (method.path === "") {
          this.createApiMethod(
            resource,
            method.method,
            props.lambdaFunctions[method.lambdaName]
          );
        } else {
          const subResource = resource.addResource(method.path);
          this.createApiMethod(
            subResource,
            method.method,
            props.lambdaFunctions[method.lambdaName]
          );
        }
      });
    });
  }

  createApiMethod(
    resource: apigateway.Resource,
    method: HttpMethod,
    lambda: DockerImageFunction
  ) {
    resource.addMethod(
      method,
      new apigateway.LambdaIntegration(lambda, {
        proxy: true,
      })
    );
  }
}
