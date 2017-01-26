import React, { Component } from 'react'

import Nav from './Nav.js'

class App extends Component {
  constructor(props){
    super(props)
  }
  
  componentDidMount() {
    // console.log('App#componentDidMount');
    const {fetchAPIToken} = this.props;
    
    fetchAPIToken();
  }
  
  render(){
    return !this.props.ready ? (<p>loading...</p>) : this.renderApp()
  }
  
  renderApp(){
    return (
    <div>
      <h1>Telly</h1>
      {this.props.children}  
    </div>
    )
  }
}
export default App