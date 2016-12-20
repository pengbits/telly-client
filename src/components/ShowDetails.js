import React, { Component } from 'react'

class ShowDetails extends Component {
  constructor (props){
    super(props);
  }
  
  componentDidMount(){
    const {fetchShowDetails} = this.props;
    console.log('ShowDetails#componentDidMount')
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
        <table>
          <tbody>
            <tr><td>id</td><td>{id}</td></tr>
            <tr><td>seriesName</td><td>{seriesName}</td></tr>
            <tr><td>banner</td><td>{banner}</td></tr>
            <tr><td>status</td><td>{status}</td></tr>
            <tr><td>network</td><td>{network}</td></tr>
            </tbody>
        </table>
      </div>
    )
  }
}

export default ShowDetails