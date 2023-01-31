import { renderFile } from "ejs";
import { formatResponse } from ".";
import { sendSimpleEmail } from "./mailgun";

export const sendEmail = async (
  templateId: string,
  templateData: Record<any, any>,
  emailData: Record<any, any>
) => {
  try {
    console.log("sending email ========>");
    const htmlData = await renderFile(
      __dirname + `/../templates/${templateId}/${templateId}.ejs`,
      templateData
    );
    const response = await sendSimpleEmail(
      emailData.recipient,
      emailData.subject,
      htmlData as string
    );
    return formatResponse(200, response);
  } catch (err) {
    console.error("Error sending email ========>", err);
    return formatResponse(422, err);
  }
};
