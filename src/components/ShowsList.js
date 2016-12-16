import React, { Component, PropTypes } from 'react'
import Show from './Show'


class ShowsList extends Component {
  constructor (props){
    super(props);
    this.setShows = props.setShows
  }
  
  componentDidMount(){
    this.setShows();
  }
  
  render(props){
    const { shows } = this.props;
    return (
      <div>
        <h1>Shows</h1>
        <ul>
          {shows.map((show,idx) => (
            <li key={idx}>{show}</li>
          ))}
        </ul>
      </div>
    )
  }
}

export default ShowsList