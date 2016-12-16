import React, { Component } from 'react'

class ShowDetails extends Component {
  constructor (props){
    super(props);
  }
  
  render(props){
    const {seriesName} = this.props;
    return (
      <div>
        <h1>{seriesName}</h1>
      </div>
    )
  }
}

export default ShowDetails