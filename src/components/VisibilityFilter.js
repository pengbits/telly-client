import React from 'react'
import { Link } from 'react-router';

const VisibilityFilter = ({children}) => (
  <div className="visiblity-filter visiblity-filter--shows">
    <h4>Filter</h4>
    
    <Link to="Queued">
      in Queue
    </Link>
    |
    <Link to="Active">
      Active
    </Link>
    |
    <Link to="Ended">
      Ended
    </Link>
  </div>
)

export default VisibilityFilter