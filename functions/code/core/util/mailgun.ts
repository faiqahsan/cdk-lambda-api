import { NodeMailgun } from "ts-mailgun";
import { apiConfig } from "./config";

const mailer = new NodeMailgun();
mailer.apiKey = apiConfig.EMAIL_SERVICE_SECRET;
mailer.domain = apiConfig.SERVICE_DOMAIN;
mailer.fromEmail = apiConfig.EMAIL_FROM;
mailer.fromTitle = apiConfig.EMAIL_FROM_TITLE;
mailer.init();

export const sendSimpleEmail = async (
  sender: string,
  subject: string,
  body: string
) => {
  try {
    await mailer.send(sender, subject, body);
    return `Email sent successfully to: ${sender}`;
  } catch (err) {
    return `Error sending email:, ${JSON.stringify(err)}`;
  }
};
