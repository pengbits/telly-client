import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router';

class ShowForm extends Component {
  constructor (props){
    super(props);
  }
  
  componentWillMount() {
    this.props.getShowDetails()
  }
  
  componentDidMount(){
    //this.props.initializeForm()
  }
  
  render(){
    // const {newShow} = this.props;
    const {loading,error} = this.props;
    
    if(loading){
      return (<p>Loading...</p>)
    } else if(error){
      return (
        <div className="error">
          {error}
        </div>
      )
    } else {
      return this.renderForm();
    }
  }
  
  renderForm(){
    // const {_id, name, network} = this.props.newShow
    const {handleSubmit, onSubmit, pristine, reset, submitting} = this.props;

    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <p>
          <b><label htmlFor="name">Name</label></b><br />
          <Field name="name" component="input" type="text"/>
        </p>
        <p>
          <b><label htmlFor="network">Network</label></b><br />
          <Field name="network" component="input" type="text"/>
        </p>
        <p>
          <button type="submit" disabled={pristine || submitting}>Submit</button>
        </p>
        
    </form>
    )
  }

}

export default reduxForm({
  form: 'show',
  enableReinitialize: true
})(ShowForm)