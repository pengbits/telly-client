import React, { Component } from 'react'

class ShowDetails extends Component {
  constructor (props){
    super(props);
  }
  
  render(){
    return this.props.isFetching ? (
      <p>loading...</p>
    ) : this.renderDetail()
  }
    
  renderDetail(){
    return (
      <div>
        <h3>Show Details</h3>
      </div>
    )
  }
}

export default ShowDetails