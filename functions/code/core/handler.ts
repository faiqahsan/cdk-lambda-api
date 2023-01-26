/*
-----------------------------------------------------------------
Uncomment the below two lines when running in local development
in order to pick env variables from your local .env file
-----------------------------------------------------------------
*/

// import * as dotenv from "dotenv";
// dotenv.config({ path: __dirname + "/.env" });

import { APIGatewayEvent, Context, Handler } from "aws-lambda";

export const handler: Handler = async (event: APIGatewayEvent) => {
  console.log(`----> Started Execution: event: ${JSON.stringify(event)}`);
};

/*
-------------------------------------Local Dev-------------------------------------------------------
Uncomment the below handler call in order to call the function locally provide the relevant payload
-----------------------------------------------------------------------------------------------------
*/

// const event: Partial<APIGatewayEvent> = {
//   resource: "test",
//   httpMethod: "POST",
//   // queryStringParameters: {},
//   // body: JSON.stringify({}),
// };

// handler(event, {} as Context, () => {
//   console.log("Test");
// });
