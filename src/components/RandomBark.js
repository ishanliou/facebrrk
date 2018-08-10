import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class RandomBark extends Component {

    updateRandom(e) {
        console.log('yay',e.target.value)
        this.props.getRandomPet(e.target.value)
    }

    render() {
        return(
            <div className="search-field">
                <label className="label">Match: </label>
                
                {/* <input className="search-bar"
                       type="text"
                       list="zodiac-list"
                       placeholder="Match your zodiac sign..."
                       onChange={this.updateRandom.bind(this)}/>
                */}
               <Link to={`/findbrrk/random`}>
                <select id="zodiac-list" onChange={this.updateRandom.bind(this)} className="search-bar match-select">
                    <option >Match your zodiac sign</option>
                    <option value="Aquarius">Aquarius</option>
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

        )
    }
}

export default RandomBark