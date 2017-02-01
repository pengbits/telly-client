import React, { Component } from 'react'
import Link from 'react-router'

class App extends Component {
  constructor(props){
    super(props)
  }
  
  render(){
    return (
    <div>
      <h1>Telly</h1>
      {this.props.children}
    </div>
    )
  }
}
export default App