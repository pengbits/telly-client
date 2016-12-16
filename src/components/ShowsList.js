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
    const {shows } = this.props;
    console.log(shows)
    return (
      <ul>
        {shows.map((show,idx) => (
          <li key={idx}>{show}</li>
        ))}
      </ul>
    )
  }
}

export default ShowsList