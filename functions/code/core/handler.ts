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
import { formatResponse } from "./util";

export const handler: Handler = async (event: APIGatewayEvent) => {
  try {
    console.log(`----> Started Execution: event: ${JSON.stringify(event)}`);
    const eventBody: { [key: string]: any } = JSON.parse(event.body as string);
    if (eventBody?.templateId && eventBody?.emailData)
      return await sendEmail(
        eventBody.templateId,
        eventBody.templateData,
        eventBody.emailData
      );
    else return formatResponse(422, "Request body missing data");
  } catch (error) {
    console.log(error);
    return;
  }
};

/*
-------------------------------------Local Dev-------------------------------------------------------
Uncomment the below handler call in order to call the function locally provide the relevant payload
-----------------------------------------------------------------------------------------------------
*/

// const event: Partial<APIGatewayEvent> = {
//   resource: "email",
//   httpMethod: "POST",
//   // queryStringParameters: {},
//   body: JSON.stringify({
//     templateId: "test",
//     templateData: {
//       recipient: "faiq.ahsan@devigital.com",
//       appName: "test",
//       resetLink: "www.google.com",
//     },
//     emailData: {
//       subject: "Test",
//       recipient: "faiq.ahsan@devigital.com",
//     },
//   }),
// };

// handler(event, {} as Context, () => {
//   console.log("Test");
// });
