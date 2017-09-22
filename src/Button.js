import React, { Component } from 'react'

export default class Button extends Component {
  handleClick = (e) => {
    if (this.props.onClick) {
      this.props.onClick(e)
    } else {
      return false
    }
  }
  render() {
    return <button onClick={this.handleClick}>{this.props.children}</button>
  }
}
