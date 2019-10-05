import React, { Component } from 'react'
import ComputerModels from './ComputerModels'
import ModelDetails from './ModelDetails'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <header className="App-header">
        <ModelDetails/>
        <ComputerModels/>
      </header>
    </div>
    )
  }
}

export default App;