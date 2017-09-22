import React, { Component } from 'react'

export default class List extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      ready: false,
    }
  }
  componentDidMount() {
    const page = 1
    if (this.props.fetchData) {
      this.props.fetchData(page)
        .then(res => {
          this.setState({
            data: res,
            ready: true,
          })
        })
    }
  }
  render() {
    return (
      <ul>
        {
          this.state.ready ?
          this.state.data.map(item =>
            <li key={item.id}>{item.text}</li>
          )
          :
          <h2>Loading.....</h2>
        }
      </ul>
    )
  }
}
