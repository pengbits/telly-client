import React, { Component } from 'react'

class App extends Component {
  constructor(props){
    super(props)
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