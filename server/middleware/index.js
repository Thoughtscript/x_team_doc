/**
 * Security and middle-ware for Express.
 *
 * @Author - Adam InTae Gerard - https://www.linkedin.com/in/adamintaegerard/
 */

'use strict'

const l = require('../logger'),
  c = require('../Constants')

const ipFilter = ['::1']

module.exports = {

  logIp: (which, req, res, next) => {
    l.log(`IP address: ${req.headers['x-forwarded-for'] || req.connection.remoteAddress} made request on ${which}!`)
    next()
  },

  serve404: (which, req, res) => {
    //TO DO - in Production - all static assets should exist on a secure hosted site rather than locally
    l.log(`404 Error - Page Not Found on ${which}!`)
    res.render('404')
  }

}