import { Environment, EnvironmentConfig } from "../helpers/types";

export const stagingConfig: EnvironmentConfig = {
  name: Environment.STAGING,
  apiSubDomainPrefix: "api-staging",
  webappSubDomainPrefix: "staging",
  rootDomain: "test-staging.com",
  branch: "staging",
  vpnCertificateArn: "",
  isProduction: false,
};
