import React, { PropTypes } from 'react'
import Show from './Show'

const ShowsList = ({ shows, onShowClick }) => (
  <ul>
    <h1>Hello</h1>
    {shows.map(show => (
      <li>show</li>
    ))}
  </ul>
)

export default ShowsList