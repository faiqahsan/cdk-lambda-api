import { createTransport, TransportOptions } from "nodemailer";
import { apiConfig } from "./config";

export enum EMAIL_SERVICE {
  gmail = "gmail",
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
};

export const transporter =
  transportMap[`${apiConfig.EMAIL_SERVICE as EMAIL_SERVICE}`] &&
  transportMap[`${apiConfig.EMAIL_SERVICE as EMAIL_SERVICE}`]();
