import React from 'react'

const Link = ({ active, children, onClick }) => {
  return (
    <a href="#"
       className={active ? 'active' : ''} 
       onClick={e => {
         e.preventDefault()
         onClick()
       }}
    >
      {children}
    </a>
  )
}

export default Link;