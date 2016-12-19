import React, { Component } from 'react'
import ShowsListContainer from '../containers/ShowsListContainer'
import SearchFormContainer from '../containers/SearchFormContainer'
import SearchResultsContainer from '../containers/SearchResultsContainer'
import Nav from './Nav.js'

class App extends Component {
  constructor(props){
    super(props)
    this.bootstraping = true
  }
  
  componentWillMount() {
    const {fetchAPIToken} = this.props;
    fetchAPIToken()
  }
  
  render(){
    return (
      <div>
        <Nav />
       {this.props.children}
        <p>loading...</p>
      </div>
    )
  }
}

export default App