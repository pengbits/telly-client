import React, { Component } from 'react'
import Link from 'react-router'

const Menu = (props) => {
  const {items,className} = props;

  return (
    <ul className={`nav navbar-nav ${className || ''}`}>
      {items.map((item,idx) => {
        return (<li key={idx}>
          <a href={`${item.path}`}>{item.label}</a>
        </li>)
      })}
    </ul>
  )
}

export default Menu