/**
 * JSON helpers.
 *
 * @Author - Adam InTae Gerard - https://www.linkedin.com/in/adamintaegerard/
 */

'use strict'

const fs = require('fs'),
  l = require('../logger')

module.exports = {

  read: path => {
    return new Promise((res, rej) => {
      try {
        fs.readFile(path, (err, data) => {
          if (err) {
            l.log(`Exception: ${err}`)
            rej(`Exception: ${err}`)
          }
          l.log(data)
          res(data)
        })
      } catch (ex) {
        l.log(`Exception: ${ex}`)
        rej(`Exception: ${ex}`)
      }
    })
  }

}

