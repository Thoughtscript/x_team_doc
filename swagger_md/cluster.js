/**
 * Main Server Cluster Entry-point.
 *
 * @Author - Adam InTae Gerard - https://www.linkedin.com/in/adamintaegerard/
 */

'use strict';

const c = require('./cluster.config'),
    configSchema = require('./cluster/config'),
    l = require('./cluster/logger');

try {
  process.on('warning', warning => l.err(`Warning encountered: ${warning}`));

  //Override new Node handling - until we have time to explicitly write out every rej - we'll capture some here
  process.on('unhandledRejection', rej => l.err(`Unhandled Rejection override: ${rej}`));

  //Anything we miss handle and swallow
  process.on('uncaughtException', exception =>  l.err(`Error encountered: ${exception}`));

  configSchema.configureCluster(c.server);
  if (c.fullLogging) l.log(`Cluster configured with the following settings: ${JSON.stringify(configSchema.getClusterConfigurationCache())}`);

  configSchema.configureSecurity(c.ssl);
  if (c.fullLogging) l.log(`Security configured with the following settings: ${JSON.stringify(configSchema.getSecurityConfigurationCache())}`);

  require('./cluster/cluster.entry').createCluster(
    configSchema.getClusterConfigurationCache(),
    configSchema.getSecurityConfigurationCache()
  );

} catch (ex) {
  //Swallow exception but notify server - we'll manually shutdown
  l.err(`Error encountered: ${ex}`);
}