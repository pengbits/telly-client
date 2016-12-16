import React, { Component, PropTypes } from 'react'
import Show from './Show'

// const ShowsList = ({ shows, onShowClick }) => (
//   <ul>
//     <h1>Hello</h1>
//     {shows.map(show => (
//       <li>show</li>
//     ))}
//   </ul>
// )

class ShowsList extends Component {
  constructor (props){
    super(props)
  }
  
  componentDidMount(){
    console.log('did mount')
    console.log(this.props)
  }
  
  render(){
    const {shows} = this.props;
    return (
      <h1>Hello</h1>
    )
  }
}

export default ShowsList