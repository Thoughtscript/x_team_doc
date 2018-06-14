/**
 * Core cluster logic.
 *
 * @Author - Adam InTae Gerard - https://www.linkedin.com/in/adamintaegerard/
 */

'use strict'

const l = require('../logger'),
  config = require('../../server.config').data,
  j = require('../json'),
  m = require('../markdown'),
  p = require('../pdf'),
  y = require('../yaml')

const SWAGGER_JSON = `${config.basePath}xteam.json`,
  SWAGGER_YAML = `${config.basePath}xteam.yaml`

module.exports = {

  getPdf: (request, response) => {
    return new Promise((resolve, reject) => {
      p.toPdf(SWAGGER_JSON).then(success => {
        resolve(response.send(success))
      })
    })
  },

 getMarkdown: (request, response) => {
   return new Promise((resolve, reject) => {
     m.toMarkdown(SWAGGER_JSON).then(success => {
       resolve(response.send(success))
     })
   })
  },

  getSwaggerJson: (request, response) => {
    return new Promise((resolve, reject) => {
      j.read(SWAGGER_JSON).then(success => {
        resolve(response.send(JSON.parse(success)))
      })
    })
  },

  getSwaggerYamlJson: (request, response) => {
    return new Promise((resolve, reject) => {
      y.fromYamlToJson(SWAGGER_YAML).then(success => {
        resolve(response.send(success))
      })
    })
  },

  getSwaggerYaml: (request, response) => {
    return new Promise((resolve, reject) => {
      y.fromYaml(SWAGGER_YAML).then(success => {
        resolve(response.send(success))
      })
    })
  },

  getRest: (request, response) => {
    return new Promise((resolve, reject) => {
      let p = `${config.basePath}rest.json`;
      j.read(p).then(success => {
        resolve(response.send({
          data: JSON.parse(success),
          status: 200
        }))
      })
    })
  }

}