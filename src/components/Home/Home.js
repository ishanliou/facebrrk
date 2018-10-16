import React from 'react'
import './home.css'

const Home = () => {
  return(
    <div className="home">
      <div className="item">
        <img src={`./image/fistbump.gif`}  alt="hero-img"/>
      </div>
      <div className="header-wrapper">
        <h1>Love is where the</h1>
        <span className="h1-span"> brrk is ...</span>
      </div>
      <div className="heightlight-text">  
        <p>Facebrrk is the most popular source to find your bark soulmate. 
           Find your bark around your area or find your furiend match your zodiac sign. </p>

      </div>
    </div>
  )
}

export default Home;