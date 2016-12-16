import React from 'react'
import ShowsListContainer from '../containers/ShowsListContainer'
import SearchFormContainer from '../containers/SearchFormContainer'
import SearchResultsContainer from '../containers/SearchResultsContainer'
import Nav from './Nav.js'

const App = React.createClass({
  render(){
    return (
      <div>
        <Nav />
        {this.props.children}
      </div>
    )
  }
});

export default App