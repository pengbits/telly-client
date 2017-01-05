import React from 'react'
import FilterLink from '../containers/FilterLink';

const Footer = ({children}) => (
  <div className="visiblity-filter visiblity-filter--shows">
    <h4>Filter</h4>
    <FilterLink filter="SHOW_ALL">
      All
    </FilterLink>
    {" | "}
    <FilterLink filter="SHOW_QUEUED">
      in Queue
    </FilterLink>
    {" | "}
    <FilterLink filter="SHOW_CONTINUING">
      Continuing
    </FilterLink>
    {" | "}
    <FilterLink filter="SHOW_ENDED">
      Ended
    </FilterLink>
  </div>
)

export default Footer