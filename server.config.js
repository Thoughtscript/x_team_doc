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
    keyPath: 'privateKey.key',
    certPath: 'certificate.crt'
  },
  data: {
    pdfPath: (linux) ? '/home/ubuntu/workspace/x_team_doc/public/pdf/' :'X-Team/x_team_doc/public/pdf/',
    basePath: (linux) ? '/home/ubuntu/workspace/x_team_doc/data/' :'X-Team/x_team_doc/data/'
  }
}
