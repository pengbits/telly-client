import React, { Component } from 'react';
import { Link } from 'react-router';
import WithAsyncRendering from './AsyncRender'

class NetworksList extends Component {
  constructor (props){
    super(props);
  }
  
  componentWillMount() {
    this.props.getNetworks();
  }
  
  deleteNetwork(e){
    e.preventDefault()
    
    const {id} = e.currentTarget.dataset;
    const proceed = confirm('Are you sure?');
    proceed && this.props.deleteNetwork(id);
  }
  
  render(){
    const {networks,message,deleteNetwork} = this.props;
      
    return (  
      <div>
        {message ? <h4 className="message" style={{color:'green'}}>{message}</h4> : null}
        <h3>My Networks</h3>
        <table className="table table-striped">
          <tbody>
            <tr>
              <th>
                name
              </th>
              <th>
                country
              </th>
              <th>
                options
              </th>
            </tr>
          {networks.length ? networks.map((n,idx) =>
            <tr key={idx}>
              <td>
                <Link to={`/networks/${n._id}`}>{n.name}</Link>
              </td>
              <td>
                {n.country}
              </td>
              <td>
                <Link 
                  className="btn btn-primary btn-xs" 
                  to={`/networks/${n._id}`}>View
                </Link>
                {' '}
                <Link 
                  className="btn btn-default btn-xs" 
                  to={`/networks/${n._id}/edit`}>Edit
                </Link>
                {' '}
                <Link 
                  className="btn btn-default btn-xs" 
                  to={`/networks/${n._id}/delete`} 
                  data-id={`${n._id}`} onClick={this.deleteNetwork.bind(this)}>Delete
                </Link>
              </td>
            </tr>) : <tr></tr>}
        </tbody>
      </table>
      <p>
        <Link to='/networks/new' className='btn btn-primary'>Add a Network</Link>
      </p>
      </div>
    )
  }
}

export default WithAsyncRendering(NetworksList)