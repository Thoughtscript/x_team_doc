'use strict'

/**
 *  Navigation Menu.
 *
 *  @Author - Adam InTae Gerard - https://www.linkedin.com/in/adamintaegerard/
 */

import React from 'react'
import { Link } from 'react-router-dom'
import { HOME_PATH, HTML_PATH, MD_PATH } from '../../Constants'

const active = {
  "color": "#000000",
  "backgroundColor": "#FFF",
  "padding": "27px 17px 28px 17px"
}

const inactive = {
  "color": "#FFF",
  "backgroundColor": "#000000",
  "padding": "27px 17px 28px 17px"
}

export class Menu extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      ...this.props
    }
  }

  render () {
    const w = window.location.pathname

    return (
      <nav>
        <ul>
          <li>
            <Link style={w === HOME_PATH ? active : inactive}  to={HOME_PATH}>Summary</Link>
          </li>
          <li>
            <Link style={w === HTML_PATH ? active : inactive} to={HTML_PATH}>HTML Page</Link>
          </li>
          <li>
            <Link style={w === MD_PATH ? active : inactive} to={MD_PATH}>MD Page</Link>
          </li>
        </ul>
      </nav>
    )
  }
}