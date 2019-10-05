import React from 'react'
import { connect } from 'react-redux'

const select = state => ({
    value: state.value
  })
  
  // a component that just the store
  const ModelDetails = ({ value }) => {
      console.log('ModelDetails > ', value);
      if ((value === undefined) || (value === '')) {
          return null
      }
      return <div>
          {value}
          {/* { value.map(model => {
              return <option key={model.id} value={model.name}>{model.name} ({model.year})</option>
              }) } */}
      </div>
      
  }
  
  export default connect(select)(ModelDetails)