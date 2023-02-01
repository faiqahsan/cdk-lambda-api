import { Environment, EnvironmentConfig } from "../helpers/types";

export const productionConfig: EnvironmentConfig = {
  name: Environment.PROD,
  apiSubDomainPrefix: "api",
  webappSubDomainPrefix: "app",
  rootDomain: "test-prod.com",
  branch: "prod",
  vpnCertificateArn: "",
  isProduction: true,
};
