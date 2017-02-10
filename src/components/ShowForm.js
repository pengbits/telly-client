import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router';
import WithAsyncRendering from './AsyncRender';

class ShowForm extends Component {
  constructor (props){
    super(props);
  }
  
  componentWillMount() {
    this.props.getShowDetails()
  }
  
  render(){
    console.log('render!')
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
})(WithAsyncRendering(ShowForm))