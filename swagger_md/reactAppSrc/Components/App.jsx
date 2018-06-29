'use strict'

/**
 *  App container.
 *
 *  @Author - Adam InTae Gerard - https://www.linkedin.com/in/adamintaegerard/
 */

import React from 'react'
import Router from './Navigation/Router'
import './AppStyling.scss'
import './Responsive.scss'

/**
 * App entry.
 * @file
 */
export default () => {
  return (
    <div className="appContainer">
      <Router/>
    </div>
  )
};
