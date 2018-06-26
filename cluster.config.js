/**
 * Server cluster configuration.
 *
 * @Author - Adam InTae Gerard - https://www.linkedin.com/in/adamintaegerard/
 */

'use strict'

const linux = false

module.exports = {

  fullLogging: false,

  server: {
    port: 4444,
    workers: 8,
    expressPort: 1111,
    logPath: (linux) ? './log' : './log',
    staticPath: (linux) ? './public' : './public'
  },

  ssl: {
    keyPath: (linux) ? './ssl/privateKey.key' : './ssl/privateKey.key',
    certPath: (linux) ? './ssl/certificate.crt' : './ssl/certificate.crt'
  },

  data: {
    pdfPath: (linux) ? '/home/ubuntu/workspace/x_team_doc/public/pdf/' :'C:/workspace/clients/X-Team/x_team_doc/public/pdf/',
    basePath: (linux) ? '/home/ubuntu/workspace/x_team_doc/data/' :'C:/workspace/clients/X-Team/x_team_doc/data/'
  }

}