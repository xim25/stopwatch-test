import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Stopwatch from './Components/Stopwatch';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Stopwatch/> 
      </div>
    );
  }
}

export default App;
