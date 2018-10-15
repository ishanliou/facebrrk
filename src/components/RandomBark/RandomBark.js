import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './randombark.css'

class RandomBark extends Component {

  updateRandom(e) {
    console.log('yay',e.target.value)
    this.props.getRandomPet(e.target.value)
  }

    render() {
      return(
        <div className="search-random-container">
          <div className="match-title">Find Your Match</div>
          <div className="random-select">
            <label className="random-label">Match: </label>
              <Link to={`/match`}>
                <select className="zodiac-list" onChange={this.updateRandom.bind(this)} className="random-select">
                    <option value=""  >Match your zodiac sign...</option>
                    <option value="Aquarius" className="option-color">Aquarius</option>
                    <option value="Pisces">Pisces</option>
                    <option value="Aries">Aries</option>
                    <option value="Taurus">Taurus</option>
                    <option value="Gemini">Gemini</option>
                    <option value="Cancer">Cancer</option>
                    <option value="Leo">Leo</option>
                    <option value="Virgo">Virgo</option>
                    <option value="Libra">Libra</option>
                    <option value="Scorpio">Scorpio</option>
                    <option value="Sagittarius">Sagittarius</option>
                    <option value="Capricorn">Capricorn</option>
                </select>
              </Link>
          </div>
        </div>
      )
    }
}

export default RandomBark