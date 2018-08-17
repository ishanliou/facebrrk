import React, { Component } from 'react'

class SearchLocation extends Component {
  updateLocation (e) {
    console.log(e.target.value)
    this.props.changeLocation(e.target.value)
  }

  render(){
    return(
      <div className="search-field">
        <label className="label">Location: </label>
        <input className="search-bar" 
                type="text" 
                placeholder="enter a zipcode near you..." 
                onChange={this.updateLocation.bind(this)}
        />
      </div>
    )
  }
}

export default SearchLocation
