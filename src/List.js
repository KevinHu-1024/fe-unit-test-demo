import React, { Component } from 'react'
import fetchData from './fetch'

export default class List extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
    }
  }
  componentDidMount() {
    const page = 1
    fetchData(page)
    .then(res => {
      this.setState({
        data: res
      })
    })
  }
  render() {
    return (
      <ul>
        {
          this.state.data.map(item =>
            <li key={item.id}>{item.text}</li>
          )
        }
      </ul>
    )
  }
}
