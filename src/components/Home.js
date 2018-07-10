import React, { Component } from 'react'

class Home extends Component {
    render(){
        return(
            <div> 
                <h1 className="title">FaceBrrk Home</h1>
                <img src={`hero-img.png`} style={{width:'1150px', height:'auto' }} alt="hero-img"/>
            </div>
        )
    }
}

export default Home;