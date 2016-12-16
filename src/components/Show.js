import React, { PropTypes } from 'react'
import { Link } from 'react-router'

const Show = ({ onClick, name, id }) => (
  <li data-id={id} onClick={onClick}>
    <Link to={`shows/${id}`}>
      {name}
    </Link>
  </li>
)

Show.propTypes = {
  onClick: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired
}

export default Show