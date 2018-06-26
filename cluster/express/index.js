/**
 * Express server with security, api's, custom logging, etc.
 *
 * @Author - Adam InTae Gerard - https://www.linkedin.com/in/adamintaegerard/
 */

"use strict";

const express = require('express'),
    app = express(),

    path = require('path'),
    bodyParser = require('body-parser'),

    c = require('../server.config'),
    l = require('../logger');

module.exports = {
    createServer: (clusterConfig, securityConfig) => {

        app.set('views', path.join(__dirname, '../..', clusterConfig.staticPath))
            .set('view engine', 'ejs')

            .use(express.static(path.join(__dirname, '../..', clusterConfig.staticPath)))
            .use(require('morgan')('dev'))
            .use(bodyParser.json())
            .use(bodyParser.urlencoded({ extended: true }))
            .use(require('cookie-parser')())

            .use(c.VIEWS_URL, require('../viewcontroller').home)
            .use(c.SWAGGER_URL, require('../viewcontroller').swaggerUi)
            .use(c.API_URL, require('../publicapi'))
            .use(c.PDF_URL, require('../viewcontroller').pdf)
            .use(c.BASE_URL, require('../viewcontroller').base);

        const listener = app.listen(clusterConfig.expressPort, err => {
            if (err) l.err(err);
            else l.log(`Express server listening on port ${listener.address().port}`);
        });

        return app;
    }
};