import React, {Component} from 'react'
const Nav = (props) => {
  return (
    <nav className="navbar navbar-default navbar-fixed-top">
      <div className="container">
       <div id="navbar" className="navbar-collapse collapse">
         <ul className="nav navbar-nav">
           <li className="active"><a href="#">Home</a></li>
           <li><a href="#about">About</a></li>
           <li><a href="#contact">Contact</a></li>
         </ul>
         <ul className="nav navbar-nav navbar-right">
           <li><a href="../navbar/">Default</a></li>
           <li><a href="../navbar-static-top/">Static top</a></li>
           <li className="active"><a href="./">Fixed top <span className="sr-only">(current)</span></a></li>
         </ul>
       </div>
     </div>
   </nav>
  )
}

export default Nav