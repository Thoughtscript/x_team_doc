'use strict'

/**
 *  Constants.
 *
 *  @Author - Adam InTae Gerard - https://www.linkedin.com/in/adamintaegerard/
 *
 *  Client-side safe path configuration.
 */

const basePath = //'https://ec2-34-209-215-91.us-west-2.compute.amazonaws.com:4444'
  'https://localhost:4444'

const c = require('../cluster/server.config')

export const
  API_REST = basePath + c.API_URL + c.API_REST_URL,
  API_JSON = basePath + c.API_URL + c.SWAGGER_JSON_URL,
  API_YAML = basePath + c.API_URL + c.SWAGGER_YAML_URL,
  API_YAML_JSON = basePath + c.API_URL + c.SWAGGER_YAML_JSON_URL,
  API_MARKDOWN = basePath + c.API_URL + c.API_MD_URL,
  API_PDF = basePath + c.API_URL + c.API_PDF_URL

export const
  MD_DOC = "https://github.com/Thoughtscript/x_team_doc/blob/master/README.md",
  MD_ETH = "https://github.com/Thoughtscript/x_team_ethereum/blob/master/README.md"

export const
  HOME_PATH = c.VIEWS_URL,
  HTML_PATH = c.VIEWS_URL + '/html',
  MD_PATH = c.VIEWS_URL + '/md',
  SWAGGER_PATH = c.SWAGGER_URL,
  PDF_PATH = c.PDF_URL