import { Environment, EnvironmentConfig } from "../helpers/types";

export const devConfig: EnvironmentConfig = {
  name: Environment.DEV,
  apiSubDomainPrefix: "api-dev",
  webappSubDomainPrefix: "dev",
  rootDomain: "test.com",
  branch: "dev",
  vpnCertificateArn: "",
  isProduction: false,
};
