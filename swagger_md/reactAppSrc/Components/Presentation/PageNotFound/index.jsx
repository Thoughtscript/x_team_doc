'use strict'

/**
 *  Page Not Found Landing page.
 *
 *  @Author - Adam InTae Gerard - https://www.linkedin.com/in/adamintaegerard/
 */

import React from 'react'
import './PageNotFound.scss'

export class PageNotFound extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      ...this.props
    }
  }

  componentDidMount () { }

  render () {
    return (
      <div className="pageContainer">
        <div className="text">
          404. Whoops! You landed on the wrong page (But hey... check out the sweet video below)!
        </div>
      </div>)
  }
}