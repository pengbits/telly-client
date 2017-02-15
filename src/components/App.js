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
      <Nav 
        items={[{
          label:'shows',
          path:'#/shows'
        },{
          label:'networks',
          path: '#/networks'
        }]}
      />
      {this.props.children}
    </div>
    )
  }
}
export default App