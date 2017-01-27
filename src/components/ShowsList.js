import React, { Component } from 'react';
import { Link } from 'react-router';

class ShowsList extends Component {
  constructor (props){
    super(props);
  }
  
  componentWillMount() {
    const {getShows} = this.props
    getShows();
  }
  
  render(){
    const {loading,errors} = this.props;
    
    if(loading){
      return (<p>Loading...</p>)
    } else if(errors && errors.length){
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
        <table>
          <tbody>
            <tr>
              <th>
                name
              </th>
              <th>
                network
              </th>
              <th>
                options
              </th>
            </tr>
          {shows.length && shows.map((s,idx) =>
            <tr key={idx}>
              <td>
                <a href={`/shows/${s._id}`}>{s.name}</a>
              </td>
              <td>
                {s.network}
              </td>
              <td>
                <Link to={`/shows/${s._id}`}>View</Link>
                {' | '}
                <Link to={`/shows/${s._id}/edit`}>Edit</Link>
                {' | '}
                <Link to={`/shows/${s._id}/delete`}>Delete</Link>
              </td>
            </tr>
          )}
        </tbody>
      </table>
      <p>
        <Link to='/shows/create'>Add a Show</Link>
      </p>
      </div>
    )
  }
}

export default ShowsList