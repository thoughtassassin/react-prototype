import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Form2 } from './Form2.js';

class App extends Component {
  render() {
    return (  
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>MSP React Prototype</h2>
        </div>
        <div className="container">
          <Form2 />
        </div>
      </div>
    );
  }
}

export default App;
