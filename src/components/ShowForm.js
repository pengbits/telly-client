import React, { Component } from 'react';
import { Link } from 'react-router';

class ShowDetails extends Component {
  constructor (props){
    super(props);
  }
  
  componentWillMount() {
    // const {getShowDetails} = this.props
    // getShowDetails();
  }
  
  render(){
    const {loading,error,show} = this.props;
    
    if(loading){
      return (<p>Loading...</p>)
    } else if(error){
      return (
        <div className="error">
          {error}
        </div>
      )
    } else {
      return show 
        ? this.renderForm() : ''
    }
  }
  
  renderForm(){
    const {_id, name, network} = this.props.show
    
    return (
      <div>
        show form
      </div>
    )
  }
}

export default ShowDetails