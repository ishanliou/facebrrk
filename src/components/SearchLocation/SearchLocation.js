import React, { Component } from 'react'
import './searchlocation.css'

class SearchLocation extends Component {
  updateLocation (e) {
    console.log(e.target.value)
    this.props.changeLocation(e.target.value)
  }

  render(){
    return(
      <div className="search-location-container">
        <label className="location-label">Location: </label>
        <input className="location-input" 
                type="text" 
                placeholder="enter a zipcode near you..." 
                onChange={this.updateLocation.bind(this)}
        />
      </div>
    )
  }
}

export default SearchLocation
