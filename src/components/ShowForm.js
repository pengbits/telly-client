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
  
  deleteShow(e){
    e.preventDefault()
    
    const {id} = e.currentTarget.dataset;
    const {router} = this.context;
    const proceed = confirm('Are you sure?');
    proceed && this.props.deleteShow(id, router);
  }
  
  render(){
    const {handleSubmit, onSubmit, pristine, reset, submitting, id, isNew, message} = this.props;

    return (
      <div>
        {pristine && message ? <h4 className="message" style={{color:'green'}}>{message}</h4> : null}
        <form onSubmit={handleSubmit(onSubmit)}>
          <p className="form-group">
            <label htmlFor="name">Name</label>
            <Field name="name" component="input" className="form-control" type="text"/>
          </p>
          <p className="form-group">
            <label htmlFor="network">Network</label>
            <Field name="network" component="input" className="form-control" type="text"/>
          </p>
          <p className="form-group">
            <button type="submit" className="btn btn-primary" disabled={pristine || submitting}>Submit</button>
          </p>
          <p className="form-group">
            <Link to='/shows'>Back</Link><br />
            {isNew ? null : (<Link to={`/shows/${id}/delete`} 
              data-id={`${id}`} onClick={this.deleteShow.bind(this)}>Delete</Link>)}
          </p>
        </form>
      </div>
    )
  }

}

export default reduxForm({
  form: 'show',
  enableReinitialize: true
})(WithAsyncRendering(ShowForm))