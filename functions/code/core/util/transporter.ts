import { createTransport, TransportOptions } from "nodemailer";
import MailTransport from "nodemailer-mailgun-transport";
import { apiConfig } from "./config";

export enum EMAIL_SERVICE {
  gmail = "gmail",
  mailgun = "mailgun",
}

const transportMap = {
  gmail: () => {
    return createTransport({
      service: apiConfig.EMAIL_SERVICE,
      auth: {
        user: apiConfig.EMAIL_USERNAME,
        pass: apiConfig.EMAIL_SERVICE_SECRET,
      },
    } as TransportOptions);
  },
  mailgun: () => {
    return createTransport(
      MailTransport({
        auth: {
          api_key: apiConfig.EMAIL_SERVICE_SECRET,
          domain: apiConfig.SERVICE_DOMAIN,
        },
      })
    );
  },
};

export const transporter =
  transportMap[`${apiConfig.EMAIL_SERVICE as EMAIL_SERVICE}`]();
