import React, { Component } from 'react'

const AddAsyncRendering = (WrappedComponent) => {
  return class ComponentWithAsync extends WrappedComponent {
    
    render() {
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
        return super.render();
      }
    }
    
  }
}

export default AddAsyncRendering