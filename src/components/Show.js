import React, { PropTypes } from 'react'

const Show = ({ onClick, text }) => (
  <li
    onClick={onClick}
  >
    {text}
  </li>
)

Show.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired
}

export default Show