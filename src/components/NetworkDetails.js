import React, { Component } from 'react';
import { Link } from 'react-router';
import WithAsyncRendering from './AsyncRender';

class NetworkDetails extends Component {
  constructor (props){
    super(props);
  }
  
  componentWillMount() {
    const {getNetworkDetails} = this.props
    getNetworkDetails();
  }

  render(){
    const { _id, name, network } = this.props.network
    
    return (
      <div>
        <h3>{name}</h3>
        <p>
          <b>name</b><br />
          {name}
        </p>
        <p>
          <b>country</b><br />
          ...
        </p>
        <p>
          <Link className='btn btn-primary'  to={`/networks/${_id}/edit`}>Edit</Link>  
        </p>
          
      </div>
    )
  }
}

export default WithAsyncRendering(NetworkDetails)