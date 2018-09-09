import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'

const Navbar = () => {
  return (
    <div className="nav-bar">
      <div className="tag-line">Love is where the brrk is</div>
      <div className="menu">
        <ul>
          <li><Link to="/home" > Home </Link></li>
          <li><Link to="/about" > About </Link></li>
          <li><Link to="/findbrrk" > Find Brrk </Link></li>
          <li><Link to="/match" > Find Your Match </Link></li>
        </ul>
        
      </div>
    </div>
  )
}

export default Navbar