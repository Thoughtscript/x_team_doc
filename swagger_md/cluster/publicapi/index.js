/**
 * Public API.
 *
 * @Author - Adam InTae Gerard - https://www.linkedin.com/in/adamintaegerard/
 */

'use strict'

const express = require('express'),
  publicapi = express.Router(),
  c = require('../server.config'),
  l = require('../logger'),
  m = require('../middleware'),
  s = require('../services');

publicapi
  .all('*', (req, res, next) => require('../middleware').logIp('API', req, res, next))

  .get(c.SWAGGER_JSON_URL, async (req, res) => {
    let response = await s.getSwaggerJson(req, res);
    return response;
  })

  .get(c.SWAGGER_YAML_URL, async (req, res) => {
    let response = await s.getSwaggerYaml(req, res);
    return response;
  })

  .get(c.SWAGGER_YAML_JSON_URL, async (req, res) => {
    let response = await s.getSwaggerYamlJson(req, res);
    return response;
  })

  .get(c.API_MD_URL, async (req, res) => {
    let response = await s.getMarkdown(req, res);
    return response;
  })

  .get(c.API_PDF_URL, async (req, res) => {
    let response = await s.getPdf(req, res);
    return response;
  })

  .get(c.API_REST_URL, async (req, res) => {
    let response = await s.getRest(req, res);
    return response;
  })

  .get('*', (req, res) => m.serve404('API', req, res))

l.log(`Public API initialized`);

module.exports = publicapi;