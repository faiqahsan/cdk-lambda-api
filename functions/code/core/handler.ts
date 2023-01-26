/*
-----------------------------------------------------------------
Uncomment the below two lines when running in local development
in order to pick env variables from your local .env file
-----------------------------------------------------------------
*/

// import * as dotenv from "dotenv";
// dotenv.config({ path: __dirname + "/.env" });

import { APIGatewayEvent, Context, Handler } from "aws-lambda";
import { sendEmail } from "./util/mail";

export const handler: Handler = async (event: APIGatewayEvent) => {
  console.log(`----> Started Execution: event: ${JSON.stringify(event)}`);

  const eventBody: { [key: string]: any } = JSON.parse(event.body as string);
  sendEmail(eventBody.templateId, eventBody.templateData);
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
//   body: JSON.stringify({
//     templateId: "test",
//     templateData: {
//       name: "test",
//     },
//   }),
// };

// handler(event, {} as Context, () => {
//   console.log("Test");
// });
