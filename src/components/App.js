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
          filter:'SHOW_ALL'
        },{
          label: 'Active',
          filter:'SHOW_ACTIVE'
        },{
          label: 'Ended',
          filter:'SHOW_ENDED'
        },{
          label: 'Off Season',
          filter:'SHOW_OFF-SEASON'
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