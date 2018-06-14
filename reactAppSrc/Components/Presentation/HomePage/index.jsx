'use strict'

/**
 *  Home Page.
 *
 *  @Author - Adam InTae Gerard - https://www.linkedin.com/in/adamintaegerard/
 */

import React from 'react'
import './HomePageStyling.scss'
import { API_JSON, API_MARKDOWN, API_PDF, API_REST, API_YAML, SWAGGER_PATH, PDF_PATH, API_YAML_JSON } from '../../../Constants'
import { DocumentationComponent } from '../../Shared/DocumentationComponent'

export default () =>
  <div className="pageContainer">

    <div className="introText">
      <h2>Introduction!</h2>
      <p>Below are several API endpoints demonstrating specific documentation-related functionalities.</p>
      <p>I'll provide a simple summary of what each of them entail using a reusable React component into which values can be automatically injected.</p>
    </div>

    <div className="documentationWrapper">
      <h2>Documentation!</h2>
      <DocumentationComponent url={API_REST} linkLabel={'REST'} description={"REST endpoint for Swagger"}/>
      <DocumentationComponent url={API_JSON} linkLabel={'JSON'} description={"Swagger JSON configuration served by API"}/>
      <DocumentationComponent url={API_YAML} linkLabel={'YAML'} description={"Swagger YAML configuration served by API"}/>
      <DocumentationComponent url={API_YAML_JSON} linkLabel={'YAML'} description={"Swagger YAML to JSON configuration served by API"}/>
      <DocumentationComponent url={API_MARKDOWN} linkLabel={'MARKDOWN'} description={"Swagger JSON converted to Markdown"}/>
      <DocumentationComponent url={API_PDF} linkLabel={'PDF'} description={"Swagger JSON converted to PDF"}/>
    </div>

    <div className="viewWrapper">
      <h2>Views!</h2>
      <DocumentationComponent url={PDF_PATH} linkLabel={'PDF Generation Page'} description={"PDF generation page!"}/>
      <DocumentationComponent url={SWAGGER_PATH} linkLabel={'Swagger Generated Page'} description={"Here's JSON generating a Swagger page!"}/>
    </div>
    
  </div>