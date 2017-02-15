import React, { Component } from 'react';
import { Link } from 'react-router';
import WithAsyncRendering from './AsyncRender';

class ShowDetails extends Component {
  constructor (props){
    super(props);
  }
  
  componentWillMount() {
    const {getShowDetails} = this.props
    getShowDetails();
  }
  
  render(){
    const { _id, name, network } = this.props.show
    
    return (
      <div>
        <h3>{name}</h3>
        <p>
          <b>name</b><br />
          {name}
        </p>
        <p>
          <b>network</b><br />
          {network}
        </p>
        <p>
          <Link className='btn btn-primary'  to={`/shows/${_id}/edit`}>Edit</Link>  
        </p>
          
      </div>
    )
  }
}

export default WithAsyncRendering(ShowDetails)