/**
 * Main script.
 *
 * @Author - Adam InTae Gerard - https://www.linkedin.com/in/adamintaegerard/
 */

'use strict';

const c = require('./server.config'),
    configSchema = require('./server/config'),
    l = require('./server/logger');

configSchema.configureCluster(c.server);
if (c.fullLogging) l.log(`Cluster configured with the following settings: ${JSON.stringify(configSchema.getClusterConfigurationCache())}`);

configSchema.configureSecurity(c.ssl);
if (c.fullLogging) l.log(`Security configured with the following settings: ${JSON.stringify(configSchema.getSecurityConfigurationCache())}`);

require('./server/cluster').createCluster(
    configSchema.getClusterConfigurationCache(),
    configSchema.getSecurityConfigurationCache()
);
