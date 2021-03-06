import React from 'react'
import './footer.css'

const Footer = () => {
    return (
        <div className="footer-container">
          <a href={`/`} target="_blank"><i className="fab fa-twitter fa-3x"></i></a>
          <a href={`/`} target="_blank"><i className="fab fa-facebook-f fa-3x"></i></a>
          <a href={`/`} target="_blank"><i className="fab fa-instagram fa-3x"></i></a>
          <a href={`/`} target="_blank"><i className="fab fa-github fa-3x"></i></a>
        </div>
    )
}

export default Footer