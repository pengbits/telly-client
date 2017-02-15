import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router';
import WithAsyncRendering from './AsyncRender';

class NetworkForm extends Component {
  constructor (props){
    super(props);
  }
  
  componentWillMount() {
    this.props.getNetworkDetails()
  }
  
  deleteNetwork(e){
    e.preventDefault()
    
    const {id} = e.currentTarget.dataset;
    const {router} = this.context;
    const proceed = confirm('Are you sure?');
    proceed && this.props.deleteNetwork(id, router);
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
            <label htmlFor="country">Country</label>
            <Field name="country" component="input" className="form-control" type="text"/>
          </p>
          <p className="form-group">
            <button type="submit" className="btn btn-primary" disabled={pristine || submitting}>Submit</button>
          </p>
          <p className="form-group">
            <Link to='/networks'>Back</Link><br />
            {isNew ? null : (<Link to={`/networks/${id}/delete`} 
              data-id={`${id}`} onClick={this.deleteNetwork.bind(this)}>Delete</Link>)}
          </p>
        </form>
      </div>
    )
  }

}

export default reduxForm({
  form: 'network',
  enableReinitialize: true
})(WithAsyncRendering(NetworkForm))