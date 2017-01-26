import React, { Component } from 'react'

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
    const {name, network} = this.props.show
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
      </div>
    )
  }
}

export default ShowDetails