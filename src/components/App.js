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
    const {fetchAPIToken} = this.props;
    fetchAPIToken().then((res) => {
      console.log(res)
      console.log('all done')
    })
  }
  
  render(){
    const {isFetching} = this.props;
    
    return (
      <div>
        <Nav />
        {isFetching &&
           <p>loading...</p>
        }
        
        {!isFetching && this.props.children}  
      </div>
    )
  }
}

export default App