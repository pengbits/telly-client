import React, { Component } from 'react'
import {Link} from 'react-router'
import Nav from './Nav'

class App extends Component {
  constructor(props){
    super(props)
  }
  
  render(){
    return (
    <div className="container">
      <Nav 
        leftItems={[{
          label:'All shows',
          filter:'all'
        },{
          label: 'Active',
          filter:'active'
        },{
          label: 'Ended',
          filter:'ended'
        },{
          label: 'Off Season',
          filter:'off-season'
        }]}
        
        rightItems={[{
          label: 'about',
          path: '/about'
        }]}
      />
      {this.props.children}
    </div>
    )
  }
}
export default App