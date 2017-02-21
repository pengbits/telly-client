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
          path:'/shows'
        },{
          label: 'Active',
          path:'/shows/filter/active'
        },{
          label: 'Ended',
          path:'/shows/filter/ended'
        },{
          label: 'Off Season',
          path:'/shows/filter/off-season'
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