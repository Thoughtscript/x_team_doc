/**
 * Core cluster logic.
 *
 * @Author - Adam InTae Gerard - https://www.linkedin.com/in/adamintaegerard/
 */

'use strict'

const cluster = require('cluster'),
  l = require('./logger/index')

module.exports = {
  createCluster: (clusterConfig, securityConfig) => {
    let workerCount = 1

    if (cluster.isMaster) {
      let cpuCount = require('os').cpus().length
      if (clusterConfig.workers !== null) cpuCount = clusterConfig.workers

      for (let i = 0; i < cpuCount; i++) {
        cluster.fork()
      }

      cluster.on('fork', worker => l.log(`Worker %d created: ${worker.id}`))
        .on('exit', worker => {
        l.err(`Worker %d died: ${worker.id}`)
        cluster.fork()
      })

    } else {
      workerCount++
      require('./ssl/index').createHttpsServer(clusterConfig, securityConfig)
    }
  }
}
