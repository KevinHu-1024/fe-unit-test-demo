import React, { Component } from 'react';
import Button from './Button'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  buttonClick = (e) => {
    alert('按钮点击')
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Button onClick={this.buttonClick}>按钮</Button>
      </div>
    );
  }
}

export default App;
