import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'

const Navbar = () => {
  return (
    <div>
      {/* For wide screen */}
      <div className="nav-bar">
        <div className="tag-line">
          <Link to="/home">
            <img src={`./image/facebrrk-logo.svg`} style={{width:"50px", height:"50px", paddingRight:"1.5em", paddingTop:"1em"}} alt="logo"/>
          </Link>
          <Link to="/home">
          <h1>FaceBrrk</h1>
          </Link>
        </div>
        <div className="wide-nav-menu">
          <ul>
            {/* <li><Link to="/home" > Home </Link></li> */}
            <li><Link to="/match" > Find Your Match </Link></li>
            <li><Link to="/findbrrk" > Find Brrk </Link></li>
            <li><Link to="/about" > About </Link></li>                    
          </ul>
        </div>
       </div>

      {/* For narrow screen */}
      <div className="nav-bar-narrow">
        <i className="fa fa-bars fa-3x"></i>
        
        <div className="narrow-nav-menu">
          <ul>
            {/* <li><Link to="/home" > Home </Link></li> */}
            <li><Link to="/match" > Find Your Match </Link></li>
            <li><Link to="/findbrrk" > Find Brrk </Link></li>
            <li><Link to="/about" > About </Link></li>                    
          </ul>
        </div>
       </div>


      </div>
  )
}

export default Navbar