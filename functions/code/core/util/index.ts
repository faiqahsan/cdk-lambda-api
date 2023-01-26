import sgMail, { MailDataRequired } from "@sendgrid/mail";
import { apiConfig } from "./config";

sgMail.setApiKey(apiConfig.SENDGRID_API_KEY as string);

export const sendEmail = async (
  emailPayload: MailDataRequired
): Promise<number> => {
  try {
    const response = await sgMail.send(emailPayload);
    return response[0].statusCode;
  } catch (error) {
    console.log("Unable to send email, Error:", error);
    throw error;
  }
};
