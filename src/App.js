import React, { Component } from 'react'
import ComputerModels from './ComputerModels'
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
      <header className="App-header">
        <ComputerModels/>
      </header>
    </div>
    )
  }
}

export default App;