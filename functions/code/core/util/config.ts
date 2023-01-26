const EMAIL_SERVICE = process.env.EMAIL_SERVICE as string;
const EMAIL_USERNAME = process.env.EMAIL_USERNAME as string;
const EMAIL_PASSWORD = process.env.EMAIL_PASSWORD as string;

export const apiConfig = {
  EMAIL_SERVICE,
  EMAIL_PASSWORD,
  EMAIL_USERNAME,
};
