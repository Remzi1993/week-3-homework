import React, { Component } from 'react'
// import { connect } from 'react-redux'
import './App.css';


class ComputerModels extends Component {
  state = {
    data: [
      {
        name: "Ivel Z3",
        manufacturer: "Ivasim",
        year: 1969,
        origin: "Croatia"
      },
      {
        name: "Bally Astrocade",
        manufacturer: "Bally Consumer Products",
        year: 1977,
        origin: "USA"
      },
      {
        name: "Sord M200 Smart Home Computer",
        manufacturer: "Sord Computer Corporation",
        year: 1971,
        origin: "Japan"
      },
      {
        name: "Commodore 64",
        manufacturer: "Commodore",
        year: 1982,
        origin: "USA"
      }
    ]
  }

  render(){
    const models = this.state.data
    // console.log('Models', models);
    
    return <select>
      <option value="">-- pick a model --</option>
      { models.map(model => {
        return <option value={model.name}>{model.name} ({model.year})</option>
        }) }
    </select>
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ComputerModels/>
      </header>
    </div>
  );
}

export default App;
