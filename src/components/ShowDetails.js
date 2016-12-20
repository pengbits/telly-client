import React, { Component } from 'react'

class ShowDetails extends Component {
  constructor (props){
    super(props);
  }
  
  componentDidMount(){
    const {fetchShowDetails} = this.props;
    fetchShowDetails();
  }
  
  render(){
    return this.props.isFetching ? (
      <p>loading...</p>
    ) : this.renderDetail()
  }
    
  renderDetail(){
    const {id,seriesName,banner,status,network} = this.props.show;

    return (
      <div>
        <h1>{seriesName}</h1>
        <p>    
          id: {id}<br />
          seriesName: {seriesName}<br />
          banner: {banner}<br />
          status: {status}<br />
          network: {network}
        </p>
      </div>
    )
  }
}

export default ShowDetails