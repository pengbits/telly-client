import React, { Component } from 'react';
import { Link } from 'react-router';
import WithAsyncRendering from './AsyncRender'

class ShowsList extends Component {
  constructor (props){
    super(props);
  }
  
  componentWillMount() {
    this.props.getShows();
  }
  
  deleteShow(e){
    e.preventDefault()
    
    const {id} = e.currentTarget.dataset;
    const proceed = confirm('Are you sure?');
    proceed && this.props.deleteShow(id);
  }
  
  render(){
    const {shows,deleteShow} = this.props;
      
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
          {shows.length ? shows.map((s,idx) =>
            <tr key={idx}>
              <td>
                <Link to={`/shows/${s._id}`}>{s.name}</Link>
              </td>
              <td>
                {s.network}
              </td>
              <td>
                <Link to={`/shows/${s._id}`}>View</Link>
                {' | '}
                <Link to={`/shows/${s._id}/edit`}>Edit</Link>
                {' | '}
                <Link to={`/shows/${s._id}/delete`} data-id={`${s._id}`} onClick={this.deleteShow.bind(this)}>Delete</Link>
              </td>
            </tr>) : <tr></tr>}
        </tbody>
      </table>
      <p>
        <Link to='/shows/new'>Add a Show</Link>
      </p>
      </div>
    )
  }
}

export default WithAsyncRendering(ShowsList)