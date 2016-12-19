import React, { Component } from 'react'
import ShowsListContainer from '../containers/ShowsListContainer'
import SearchFormContainer from '../containers/SearchFormContainer'
import SearchResultsContainer from '../containers/SearchResultsContainer'
import Nav from './Nav.js'

class App extends Component {
  constructor(props){
    super(props)
  }
  
  componentWillMount() {
    console.log('how about doing some api stuff')
    const {fetchAPIToken} = this.props;
    fetchAPIToken()
  }
  
  render(){
    return (
      <div>
        <Nav />
        {this.props.children}
      </div>
    )
  }
}

export default App