import React, { Component } from 'react'
import Link from 'react-router'
import Nav from './Nav'

class App extends Component {
  constructor(props){
    super(props)
  }
  
  render(){
    return (
    <div className="container">
      <Nav />
      {this.props.children}
    </div>
    )
  }
}
export default App