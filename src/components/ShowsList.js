import React, { Component } from 'react'
import Show from './Show'

class ShowsList extends Component {
  constructor (props){
    super(props);
  }
  
  componentDidMount(){
    const {setShows} = this.props;
    setShows();
  }
  
  render(props){
    const { shows, onShowClick } = this.props;
    return (  
      <div>
        <h1>Shows</h1>
        <ul className="show-list">
          {shows.map((show,idx) => (
            <Show key={idx} name={show.seriesName} id={show.id} onClick={onShowClick} />
          ))}
        </ul>
      </div>
    )
  }
}

export default ShowsList