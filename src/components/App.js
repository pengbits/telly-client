import React, { Component } from 'react'
import ShowsListContainer from '../containers/ShowsListContainer'
import SearchFormContainer from '../containers/SearchFormContainer'

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
      <Nav />
      {this.props.children}  
    </div>
    )
  }
}
export default App