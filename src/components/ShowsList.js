import React, { Component } from 'react'

class ShowsList extends Component {
  constructor (props){
    super(props);
  }
  
  componentWillMount() {
    const {getShows} = this.props
    getShows();
  }
  
  render(props){
    return (  
      <div>
        <h3>My Shows</h3>
      </div>
    )
  }
}

export default ShowsList