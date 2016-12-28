import React from 'react'
import { Link } from 'react-router';

const Nav = ({children}) => (
  <div>
    <Link to="shows">
      Shows
    </Link>
    {" | "}
    <Link to="search">
      Search
    </Link>
  </div>
)

export default Nav