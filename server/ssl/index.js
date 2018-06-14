/**
 * SSL and Https.
 *
 * @Author - Adam InTae Gerard - https://www.linkedin.com/in/adamintaegerard/
 */

'use strict';

const l = require('../logger'),
  h = require('https');

module.exports = {
  createHttpsServer: (clusterConfig, securityConfig) => {

    const s = h.createServer(securityConfig.ssl, require('../express/').createServer(clusterConfig, securityConfig));

    s.on('clientError', (err, sck) => {
      const e = `HTTP/1.1 400 Bad Request! ${err}`
      l.err(e)
      sck.end(e)
    })

    s.listen(clusterConfig.port, () => {
      l.log(`HTTPS server started on port: ${s.address().port}`)
    })

    return s
  }
}