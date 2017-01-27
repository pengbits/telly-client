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
    const {isFetching,hasErrors} = this.props;
    
    if(isFetching){
      return (<p>Loading...</p>)
    } else if(hasErrors){
      return (<p>An Error has occured</p>)
    } else {
      return this.renderList()
    }
  }
  
  renderList(){
    const {shows} = this.props;
      
    return (  
      <div>
        <h3>My Shows</h3>
        <ul>
        {shows.length && shows.map((s,idx) =>
          <li key={idx}>
            <a href={`/#/shows/${s._id}`}>{s.name}</a>
          </li>
        )}
        </ul>
      </div>
    )
  }
}

export default ShowsList