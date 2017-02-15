import React, { Component } from 'react'
import { Link } from 'react-router'


const AddAsyncRendering = (WrappedComponent) => {
  return class ComponentWithAsync extends WrappedComponent {
    
    render() {
      const {loading,error,hasError} = this.props;

      if(loading){
        return (<p>Loading...</p>)
      } else if(error || hasError){
        return (
          <div className="error">
            <p>{error ? error : 'An Error has Occurred'}</p>
          </div>
        )
      } else {
        return super.render();
      }
    }
    
  }
}

export default AddAsyncRendering