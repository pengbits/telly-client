import React, { Component } from 'react';
import { Link } from 'react-router';

class ShowDetails extends Component {
  constructor (props){
    super(props);
  }
  
  componentWillMount() {
    const {getShowDetails} = this.props
    getShowDetails();
  }
  
  render(){
    const {isFetching,hasErrors} = this.props;
    
    if(isFetching){
      return (<p>Loading...</p>)
    } else if(hasErrors){
      return (<p>An Error has occured</p>)
    } else {
      return this.renderDetails()
    }
  }
  
  renderDetails(){
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

export default ShowDetails