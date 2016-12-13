import React, { PropTypes } from 'react'
import Show from './Show'

const ShowsList = ({ shows, onShowClick }) => (
  <ul>
    {shows.map(show =>
    <Show
      key={show.id}
      {...show}
      onClick={() => onShowClick(show.id)}
    />
    )}
  </ul>
)

export default ShowsList