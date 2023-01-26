import { HttpMethod } from "aws-cdk-lib/aws-events";
import { ApiResource, LambdaDefinition } from "../infra/helpers/types";

export const ApiResources: ApiResource[] = [
  {
    resource: "emailHelper",
    methods: [
      {
        path: "",
        method: HttpMethod.POST,
        lambdaName: "migrateSchema",
      },
    ],
  },
];

export const LambdaDefinitions: LambdaDefinition[] = [
  /*
  |-----------------------------------------------------------------------------
  | FUNCTIONS
  |-----------------------------------------------------------------------------
  */
  {
    name: "core",
    codePath: "core",
    timeoutMins: 10,
    memoryMB: 2048,
  },
];
