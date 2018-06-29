'use strict';

/**
 *  Documentation Component.
 *
 *  @Author - Adam InTae Gerard - https://www.linkedin.com/in/adamintaegerard/
 */

import React from 'react'
import CustomLink from '../CustomLink/index'

/**
 * Documentation component.
 * @file
 */
export class DocumentationComponent extends React.Component {
  constructor (props) {
    super(props)
    this.state = ({
      improve: false,
      suggestion: ""
    })
    this.handleRadio = this.handleRadio.bind(this)
    this.handleSuggestion = this.handleSuggestion.bind(this)
  }

  handleSuggestion(e) { this.setState({suggestion: e.target.value}) }

  handleRadio(e) {
    if (this.props.linkLabel + "Check" === this.state.improve) this.setState({improve: "Check"})
    else this.setState({improve: this.props.linkLabel + "Check"})
  }

  componentDidMount () { }

  render () {
    const props = this.props, check = (this.props.linkLabel + "Check" === this.state.improve)

    return (
      <div className="documentation">

        <p>{props.description}</p>
        <CustomLink url={props.url} label={props.linkLabel}/>

        <div className="improvementWrapper">
          <label>Can we improve this?</label>
          <input type="checkbox" id={props.linkLabel + "Check"}  checked={check} onChange={this.handleRadio}/>
          <input type="text" id={props.linkLabel + "Text"} value={this.state.suggestion} style={{ "display": (check) ? "block" : "none" }}
                 placeholder="Please let us know how we can improve this article!" onChange={this.handleSuggestion}/>
        </div>

      </div>
    )
  }
}

