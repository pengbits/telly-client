import React, { PropTypes } from 'react'

const Show = ({ onClick, name, id }) => (
  <li data-id={id} onClick={onClick}>
    {name}
  </li>
)

Show.propTypes = {
  onClick: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired
}

export default Show