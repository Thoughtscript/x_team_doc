'use strict'

/**
 *  HTML Generated Documentation Page.
 *
 *  @Author - Adam InTae Gerard - https://www.linkedin.com/in/adamintaegerard/
 */

import React from 'react'
import { API_MARKDOWN } from '../../../Constants'
import { asyncGet } from '../../../Helpers/GetHelper'
import './DocumentationPage.scss'

let marked = require('marked')

export class DocumentationPage extends React.Component {
  constructor (props) {
    super(props)
    this.state = ({ })
  }

  componentDidMount () {
    marked.setOptions({
      renderer: new marked.Renderer(),
      gfm: true,
      tables: true,
      breaks: false,
      pedantic: false,
      sanitize: false,
      smartLists: true,
      smartypants: false,
      xhtml: false
    })

    asyncGet(API_MARKDOWN, null).then(data => {
      const d = JSON.parse(data)['data']
      console.log(d)
      document.getElementById('markdown').innerHTML = marked(JSON.parse(data)['data'])
    })
  }

  render () {
    return (

      <div className="pageContainer">
        <div className="introText">
          <h2>Introduction!</h2>
          <p>This page does something different - it takes the Markdown from the API and uses it to create a Web-based
            HTML-page.</p>
          <p>This is neither a Swagger-generated HTML page nor is it a standard manually built documentation page -
            rather it demonstrates customization using the same JSON configuration!</p>
        </div>
        <div id="markdown">

        </div>
      </div>

    )
  }
}
