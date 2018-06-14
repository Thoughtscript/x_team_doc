/**
 * YAML helpers.
 *
 * @Author - Adam InTae Gerard - https://www.linkedin.com/in/adamintaegerard/
 */

'use strict'

const fs = require('fs'),
  l = require('../logger'),
  YAML = require('js-yaml')

const bufferToString = buffer => (buffer instanceof Buffer) ? buffer.toString() : buffer;

module.exports = {

  fromYaml: path => {
    return new Promise((res, rej) => {
      try {
        fs.readFile(path, (err, yaml) => {
          if (err) {
            l.log(`Exception: ${err}`)
            rej(`Exception: ${err}`)
          }

          let yml = bufferToString(yaml);
          res({data: yml, status: 200})

        })
      } catch (ex) {
        l.log(`Exception: ${ex}`)
        rej(`Exception: ${ex}`)
      }
    })
  },

  fromYamlToJson: path => {
    return new Promise((res, rej) => {
      try {
        fs.readFile(path, (err, yaml) => {
          if (err) {
            l.log(`Exception: ${err}`)
            rej(`Exception: ${err}`)
          }

          let yml = YAML.safeLoad(bufferToString(yaml));
          res({data: yml, status: 200})

        })
      } catch (ex) {
        l.log(`Exception: ${ex}`)
        rej(`Exception: ${ex}`)
      }
    })
  }

}

