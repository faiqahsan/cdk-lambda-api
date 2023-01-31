const EMAIL_SERVICE = process.env.EMAIL_SERVICE as string;
const EMAIL_USERNAME = process.env.EMAIL_USERNAME as string;
const EMAIL_SERVICE_SECRET = process.env.EMAIL_SERVICE_SECRET as string;
const SERVICE_DOMAIN = process.env.SERVICE_DOMAIN as string;
const EMAIL_FROM = process.env.EMAIL_FROM as string;
const EMAIL_FROM_TITLE = process.env.EMAIL_FROM_TITLE as string;

export const apiConfig = {
  EMAIL_SERVICE,
  EMAIL_SERVICE_SECRET,
  EMAIL_FROM,
  EMAIL_FROM_TITLE,
  EMAIL_USERNAME,
  SERVICE_DOMAIN,
};
