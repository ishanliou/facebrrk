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
        <p>Facebrrk is using the most popular source from PetFinder.com to find your barking soulmate. 
           Find your bark near you or match your furiend with zodiac sign. </p>

      </div>
    </div>
  )
}

export default Home;