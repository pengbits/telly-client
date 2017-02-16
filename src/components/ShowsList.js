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
    const {shows,message,deleteShow} = this.props;
      
    return (  
      <div>
        {message ? <h4 className="message" style={{color:'green'}}>{message}</h4> : null}
        <h3>My Shows</h3>
        <table className="table table-striped">
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
                {!s.network ? null
                  :
                  <Link to={`/networks/${s.network._id}`}>{s.network.name}</Link>
                }
              </td>
              <td>
                <Link 
                  className="btn btn-primary btn-xs" 
                  to={`/shows/${s._id}`}>View
                </Link>
                {' '}
                <Link 
                  className="btn btn-default btn-xs" 
                  to={`/shows/${s._id}/edit`}>Edit
                </Link>
                {' '}
                <Link 
                  className="btn btn-default btn-xs" 
                  to={`/shows/${s._id}/delete`} 
                  data-id={`${s._id}`} onClick={this.deleteShow.bind(this)}>Delete
                </Link>
              </td>
            </tr>) : <tr></tr>}
        </tbody>
      </table>
      <p>
        <Link to='/shows/new' className='btn btn-primary'>Add a Show</Link>
      </p>
      </div>
    )
  }
}

export default WithAsyncRendering(ShowsList)