import { createTransport, TransportOptions } from "nodemailer";
import { apiConfig } from "./config";

export const transporter = createTransport({
  service: apiConfig.EMAIL_SERVICE,
  auth: {
    user: apiConfig.EMAIL_USERNAME,
    pass: apiConfig.EMAIL_PASSWORD,
  },
} as TransportOptions);
