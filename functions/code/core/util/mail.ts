import { render } from "ejs";
import { formatResponse } from ".";
import { sendSimpleEmail } from "./mailgun";
import * as fs from "fs";

export const sendEmail = async (
  templateId: string,
  templateData: Record<any, any>,
  emailData: Record<any, any>
) => {
  try {
    const fileContents = fs.readFileSync(
      `./templates/${templateId}/${templateId}.ejs`,
      {
        encoding: "utf-8",
      }
    );
    const htmlData = await render(fileContents, templateData);
    const response = await sendSimpleEmail(
      emailData.recipient,
      emailData.subject,
      htmlData as string
    );
    console.log("Email sending success", response);
    return formatResponse(200, response);
  } catch (err) {
    console.error("Error sending email:", JSON.stringify(err));
    return formatResponse(422, err);
  }
};
