import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Form } from './Form.js';

class App extends Component {
  render() {
    return (  
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>MSP React Prototype</h2>
        </div>
        <div className="container">
          <p className="instructions">Fields marked with * are required</p>
          <Form />
        </div>
      </div>
    );
  }
}

export default App;
