'use strict'

/**
 *  Router.
 *
 *  @Author - Adam InTae Gerard - https://www.linkedin.com/in/adamintaegerard/
 */

import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Menu } from './Menu'

import HomePage from '../Presentation/HomePage'
import { DocumentationPage } from '../Presentation/DocumentationPage'
import { MarkDownPage } from '../Presentation/MarkDownPage'
import { PageNotFound } from '../Presentation/PageNotFound'

import { HOME_PATH, HTML_PATH, MD_PATH } from '../../Constants'

export default () =>
  <BrowserRouter>
    <div className="innerRouterWrapper">
      <Menu/>
      <Switch>
        <Route exact path={HOME_PATH} component={HomePage}/>
        <Route exact path={HTML_PATH} component={DocumentationPage}/>
        <Route exact path={MD_PATH} component={MarkDownPage}/>
        <Route component={PageNotFound}/>
      </Switch>
    </div>
  </BrowserRouter>
