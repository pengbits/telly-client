import React, {Component} from 'react'
import Menu from './Menu'

const Nav = (props) => {
  const {leftItems,rightItems} = props;
  
  return (
    <nav className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </button>
        <a className="navbar-brand" href="#/shows">Telly</a>
      </div>
       <div id="navbar" className="navbar-collapse collapse">
         {leftItems ?   <Menu items={leftItems} /> : null}
         {' '}
         {rightItems ?  <Menu items={rightItems} className='navbar-right' /> : null}
       </div>
     </div>
   </nav>
  )
}

export default Nav