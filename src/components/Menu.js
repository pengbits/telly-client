import React, { Component } from 'react'
import {Link} from 'react-router'
import FilterLink from '../containers/FilterLink'

const Menu = (props) => {
  const {items,className} = props;

  return (
    <ul className={`nav navbar-nav ${className || ''}`}>
      {items.map((item,idx) => {
        return (<li key={idx}>
          {item.filter ? 
            <FilterLink filter={`${item.filter}`}>{item.label}</FilterLink> : 
            <Link to={`${item.path}`}>{item.label}</Link>}
        </li>)
      })}
    </ul>
  )
}

export default Menu