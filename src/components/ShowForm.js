import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router';

class ShowForm extends Component {
  constructor (props){
    super(props);
  }
  
  componentWillMount() {
    // const {getShowForm} = this.props
    // getShowForm();
  }
  
  render(){
    const {newShow} = this.props;

    return this.renderForm();
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
          <button type="submit" disabled={submitting}>Submit</button>
        </p>
    </form>
    )
  }

}

export default reduxForm({
  form: 'show'
})(ShowForm)