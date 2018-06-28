/**
 * Configuration objects with defaults.
 *
 * @Author - Adam InTae Gerard - https://www.linkedin.com/in/adamintaegerard/
 */

"use strict";

const fs = require('fs');

const readFile = file => {
    return fs.readFileSync(file);
};

let clusterCache = {
    port: 8888,
    wssPort: 7777,
    workers: 8,
    expressPort: 3333,
    logPath: './log',
    staticPath: './public'
};

let securityCache = {
    ssl: {
        key: readFile('./ssl/key.pem', 'utf8'),
        cert: readFile('./ssl/cert.pem', 'utf8')
    }
};

module.exports = {
    /**
     * Getters
     */

    getClusterConfigurationCache: () => {
        return clusterCache
    },
    getSecurityConfigurationCache: () => {
        return securityCache
    },

    /**
     * Setters
     */

    configureCluster: clusterConfig => {
        clusterCache = {
            port: process.env.PORT || clusterConfig.port || clusterCache.port,
            workers: clusterConfig.workers || clusterCache.workers,
            expressPort: clusterConfig.expressPort || clusterCache.expressPort,
            logPath: clusterConfig.logPath || clusterCache.logPath,
            staticPath: clusterConfig.staticPath || clusterCache.staticPath
        }
    },
    configureSecurity: (sslConfig, oauthConfig) => {
        securityCache = {
            ssl: {
                key: readFile(sslConfig.keyPath, 'utf8') || securityCache.ssl.key,
                cert: readFile(sslConfig.certPath, 'utf8') || securityCache.ssl.cert
            }
        }
    }
};
