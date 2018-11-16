import React, { Component } from 'react';
import Logo from './logo.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <img src={Logo} alt="Health & Fit" className="logo"/>
        <h1>Welcome to us!</h1>
        <p>This app helps you to be healthier and fit.</p>
        <p>This is development branch - you should commit here</p>
      </div>
    );
  }
}

export default App;
