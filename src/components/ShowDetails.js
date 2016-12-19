import React, { Component } from 'react'

class ShowDetails extends Component {
  constructor (props){
    super(props);
  }
  
  componentDidMount(){
    const {fetchShowDetails} = this.props;
    fetchShowDetails();
  }
  
  render(props){
    const {seriesName, isFetching} = this.props;
    return (
      <div>
        <h1>{seriesName}</h1>
      </div>
    )
  }
}

export default ShowDetails