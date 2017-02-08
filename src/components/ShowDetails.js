import React, { Component } from 'react';
import { Link } from 'react-router';
import AddAsyncRendering from './AsyncRender';

class ShowDetails extends Component {
  constructor (props){
    super(props);
  }
  
  componentWillMount() {
    const {getShowDetails} = this.props
    getShowDetails();
  }
  
  render(){
    const {_id, name, network} = this.props.show
    
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
          <Link to={`/shows/${_id}/edit`}>Edit</Link><br />
          <Link to='/shows'>Back</Link>
        </p>
          
      </div>
    )
  }
}

export default AddAsyncRendering(ShowDetails)