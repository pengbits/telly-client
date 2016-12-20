import React, { PropTypes } from 'react'
import { Link } from 'react-router'

const Show = ({name, id }) => (
  <li data-id={id}>
    <Link to={`shows/${id}`}>
      {name}
    </Link>
  </li>
)

Show.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired
}

export default Show