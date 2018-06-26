'use strict'

/**
 *  MarkDown Page.
 *
 *  @Author - Adam InTae Gerard - https://www.linkedin.com/in/adamintaegerard/
 */

import React from 'react'
import { MD_DOC, MD_ETH } from '../../../Constants'
import { get } from '../../../Helpers/FetchHelper'
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

    try {
      get(MD_ETH).then(firstSuccess => {
        let el = document.getElementsByClassName('ethereum')[0], n = document.createElement('div')
        el.appendChild(n)
        n.innerHTML = marked(firstSuccess)
      })

      get(MD_DOC).then(secondSuccess => {
        let el = document.getElementsByClassName('documentation')[0], n = document.createElement('div')
        el.appendChild(n)
        n.innerHTML = marked(secondSuccess)
      })
    } catch (ex) {
      console.error('Exception: ' + ex)
    }
  }

  render () {
    const {ethereum, documentation} = this.state
    return (
      <div className="pageContainer">
        <div className="introText">
          <h2>Introduction!</h2>
          <p>This page demonstrates dynamic MarkDown injection!</p>
          <p>You can easily assemble resources and other cross-platform resources!</p>
        </div>
        <div className="markdown ethereum"></div>
        <div className="markdown documentation"></div>
      </div>
    )
  }
}
