import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'

class Navbar extends Component {
  constructor () {
    super();
    this.state = {
      showMenu: false,
  }
  this.showMenu = this.showMenu.bind(this);
  this.closeMenu = this.closeMenu.bind(this);
  }

  showMenu (e) {
    e.preventDefault();

    this.setState({showMenu: true}, () => {
      document.addEventListener('click', this.closeMenu)
    })
  }

  closeMenu () {
    this.setState({ showMenu: false }, () => {
      document.removeEventListener('click', this.closeMenu)
    })
  }

  render() {
    return (
      <div className="navbar-container">
        {/* For wide screen */}
        <div className="nav-bar">
          <div className="tag-line">
            <Link to="/home">
              <img className="animated bounce" src={`./image/facebrrk-logo.svg`} style={{width:"50px", height:"50px", paddingRight:"1.5em", paddingTop:"1em"}} alt="logo"/>
            </Link>
            <Link to="/home">
            <h1>FaceBrrk</h1>
            </Link>
          </div>
          <div className="wide-nav-menu">
            <ul>
              <li><Link to="/match" > Match Your Zodiac Sign </Link></li>
              <li><Link to="/findbrrk" > Find YourBrrk </Link></li>
              {/* <li><Link to="/about" > About </Link></li>                     */}
            </ul>
          </div>
         </div>
  
        {/* For narrow screen */}
        <div className="nav-bar-narrow">
          <i className="fa fa-bars fa-4x" onClick={this.showMenu}></i>
          {
            this.state.showMenu
            ?(
              <div className="narrow-nav-menu">
            <ul>
              <li><Link to="/match" > Find Your Match </Link></li>
              <li><Link to="/findbrrk" > Find Your Brrk </Link></li>
              <li><Link to="/about" > About </Link></li>                    
            </ul>
          </div>
            )
            :(
              null
            )
          }
          
         </div>
         </div>
    )
  }
}

export default Navbar