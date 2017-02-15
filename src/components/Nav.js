import React, {Component} from 'react'
const Nav = (props) => {
  const {items,leftItems,rightItems} = props;
  console.log(leftItems)
  
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
         {items ?
          <ul className="nav navbar-nav">
            {items.map((item,idx) => {
              return (<li key={idx}>
                <a href={`${item.path}`}>{item.label}</a>
              </li>)
            })}
         </ul>
         : null
         }
         {rightItems ?
         <ul className="nav navbar-nav navbar-right">
           {rightItems.map((item,idx) => {
             return (<li key={idx}>
               <a href={`${item}`}>{item}</a>
             </li>)
           })}
          </ul>
        : null}
       </div>
     </div>
   </nav>
  )
}

export default Nav