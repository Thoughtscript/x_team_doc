'use strict'

/**
 *  MarkDown Page.
 *
 *  @Author - Adam InTae Gerard - https://www.linkedin.com/in/adamintaegerard/
 */

import React from 'react'
import { MD_DOC, MD_ETH } from '../../../Constants'
import { asyncGet } from '../../../Helpers/GetHelper'
import './MarkDownPage.scss'

let marked = require('marked')

export class MarkDownPage extends React.Component {
  constructor (props) {
    super(props)
    this.state = ({})
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

    asyncGet(MD_DOC, null).then(firstData => {
      try {
        const dOne = JSON.parse(firstData)['data']
        console.log(dOne)
        document.getElementById('documentation').innerHTML = marked(dOne)
        asyncGet(MD_ETH, null).then(secondData => {
          try {
            const dTwo = JSON.parse(data)['data']
            console.log(dTwo)
            document.getElementById('ethereum').innerHTML = marked(JSON.parse(dTwo)['data'])
          } catch (ex) {
            console.error("Exception: "  + ex);
          }
        })
      } catch (ex) {
        console.error("Exception: "  + ex);
      }
    })
  }

  render () {
    return (

      <div className="pageContainer">
        <div className="introText">
          <h2>Introduction!</h2>
          <p>This page demonstrates dynamic MarkDown injection!</p>
          <p>You can easily assemble resources and other cross-platform resources!</p>
        </div>
        <div id="documentation"></div>
        <div id="ethereum"></div>
      </div>

    )
  }
}
