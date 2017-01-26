import React, { Component } from 'react'

class ShowsList extends Component {
  constructor (props){
    super(props);
  }
  
  componentWillMount() {
    const {getShows} = this.props
    getShows();
  }
  
  render(){
    const {shows} = this.props;
    return (  
      <div>
        <h3>My Shows</h3>
        <ul>
        {shows.map((s,idx) =>
          <li key={idx}>{s.name}</li>
        )}
        </ul>
      </div>
    )
  }
}

export default ShowsList