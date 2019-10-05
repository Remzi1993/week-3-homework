import React, { Component } from 'react'
import { connect } from 'react-redux'

class ComputerModels extends Component {

    state = {
      value: '',
      data: [
        {
          id: 1,
          name: "Ivel Z3",
          manufacturer: "Ivasim",
          year: 1969,
          origin: "Croatia"
        },
        {
          id: 2,
          name: "Bally Astrocade",
          manufacturer: "Bally Consumer Products",
          year: 1977,
          origin: "USA"
        },
        {
          id: 3,
          name: "Sord M200 Smart Home Computer",
          manufacturer: "Sord Computer Corporation",
          year: 1971,
          origin: "Japan"
        },
        {
          id: 4,
          name: "Commodore 64",
          manufacturer: "Commodore",
          year: 1982,
          origin: "USA"
        }
      ],
      date: new Date()
    }
  
    componentDidMount() {
      this.timerID = setInterval(
        () => this.tick(),
        1000
      );
    }
  
    componentWillUnmount() {
      clearInterval(this.timerID);
    }
  
    tick() {
      // let date = new Date()
      // this.setState({
      //   date: date
      // });
    }
  
    updateSelection = (event) => {
      // console.log(event.target.value)
      this.setState({ value: event.target.value });
    }
  
    handleSubmit = (event) => {
      event.preventDefault() // no refresh pls
      // console.log('submitting form')
      console.log('Added > ', this.state.value);
      const action = {
          type: 'ADD_MODEL',
          payload: this.state.value
      }
  
      this.props.dispatch(action)
      this.setState({ value: '' })
    }
  
    render(){
      // I needed to check my time :)
      const hours = this.state.date.getHours()
      const minutes = (this.state.date.getMinutes()<10?'0':'') + this.state.date.getMinutes()
      const seconds = (this.state.date.getSeconds()<10?'0':'') + this.state.date.getSeconds()    
  
      const models = this.state.data
      // console.log('Models', models);
      // console.log(this.state.data);
      
      return <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            <select value={this.state.value} onChange={this.updateSelection}>
            <option value="default">-- pick a model --</option>
            { models.map(model => {
              return <option key={model.id} value={model.name}>{model.name} ({model.year})</option>
              }) }
            </select>
          </label>
          <input type="submit" value="Add" />
        </form>
      <h2>It is {hours}:{minutes}:{seconds}.</h2>
      </div>
    }
  }



  const mapStateToProps = (state) => {
    console.log('STATE OF THE STORE IN MSTP', state)
  
    return {
      ComputerModels: state
    }
  }
  
  export default connect(mapStateToProps)(ComputerModels)