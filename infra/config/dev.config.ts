import { Environment, EnvironmentConfig } from "../helpers/types";

export const devConfig: EnvironmentConfig = {
  name: Environment.DEV,
  apiSubDomainPrefix: "api-dev",
  webappSubDomainPrefix: "dev",
  rootDomain: "test-dev.com",
  branch: "dev",
  vpnCertificateArn: "",
  isProduction: false,
};
