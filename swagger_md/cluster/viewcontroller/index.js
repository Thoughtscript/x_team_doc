/**
 * Main view controller - for single page app.
 *
 * @Author - Adam InTae Gerard - https://www.linkedin.com/in/adamintaegerard/
 */

'use strict'

const m = require('../middleware'),
  l = require('../logger'),
  express = require('express'),
  home = express.Router(),
  swaggerUi = express.Router(),
  pdf = express.Router(),
  base = express.Router()

base
  .all('*', (req, res, next) => m.logIp('Base', req, res, next))
  .get('*', (req, res) => m.serve404('Base', req, res))

home
  .all('*', (req, res, next) => m.logIp('Home', req, res, next))
  .get('/', (req, res) => res.render('index'))
  .get('*', (req, res) => m.serve404('Home', req, res))

pdf
  .all('*', (req, res, next) => m.logIp('PDF', req, res, next))
  .get('/', (req, res) => res.render('pdf'))
  .get('*', (req, res) => m.serve404('PDF', req, res))

swaggerUi
  .all('*', (req, res, next) => m.logIp('Swagger', req, res, next))
  .get('/', (req, res) => res.render('swagger'))
  .get('*', (req, res) => m.serve404('Swagger', req, res))

l.log(`Home and Swagger view controllers initialized`)

module.exports = {
  home: home,
  swaggerUi: swaggerUi,
  base: base,
  pdf: pdf
}