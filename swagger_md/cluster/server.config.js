/**
 * Constants.
 *
 * @Author - Adam InTae Gerard - https://www.linkedin.com/in/adamintaegerard/
 */

'use strict'

const BASE_URL = "/", VIEWS_URL = '/views', SWAGGER_URL = '/swagger', PDF_URL = '/pdf', API_URL = '/api',
  API_MD_URL = '/markdown', API_PDF_URL = '/pdf', API_REST_URL =  '/rest', SWAGGER_JSON_URL = '/swagger/json',
  SWAGGER_YAML_URL = '/swagger/yaml', SWAGGER_YAML_JSON_URL = '/swagger/yamljson',  FAV_ICON = '/assets/favicon.ico'

module.exports = {

//Main endpoints

  BASE_URL: BASE_URL,
  VIEWS_URL: VIEWS_URL,
  SWAGGER_URL: SWAGGER_URL,
  PDF_URL: PDF_URL,
  API_URL: API_URL,

//API endpoints

  API_MD_URL: API_MD_URL,
  API_PDF_URL: API_PDF_URL,
  API_REST_URL: API_REST_URL,

  SWAGGER_JSON_URL: SWAGGER_JSON_URL,
  SWAGGER_YAML_URL: SWAGGER_YAML_URL,
  SWAGGER_YAML_JSON_URL: SWAGGER_YAML_JSON_URL,

  FAV_ICON: FAV_ICON,

//Exports for Security Filter middleware

  securityFilter: [
    VIEWS_URL,
    SWAGGER_URL,
    PDF_URL,
    BASE_URL,
    API_URL + API_MD_URL,
    API_URL + API_PDF_URL,
    API_URL + API_REST_URL,
    API_URL + SWAGGER_JSON_URL,
    API_URL + SWAGGER_YAML_URL,
    API_URL + SWAGGER_YAML_JSON_URL,

    //Remove for production since there will be no local file hosting

    "/built/vendor.min.js",
    "/built/built.min.js",
    "/built/main.min.css",

    "/pdf/example.pdf",

    "/assets/swagger-ui.css",
    "/assets/swagger-overrides.css",
    "/assets/favicon-32x32.png",
    "/assets/favicon-16x16.png",
    FAV_ICON

  ]
}