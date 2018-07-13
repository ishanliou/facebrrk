import React, { Component } from 'react'

class RandomBark extends Component {

    updateRandom(e) {
        console.log('yay')
        this.props.getRandomPet(e.target.value)
    }

    render() {
        return(
            <div className="search-field">
                <label className="label">Match: </label>
                <input className="search-bar"
                       type="text"
                       list="zodiac-list"
                       placeholder="Match your zodiac sign..."
                       onChange={this.updateRandom.bind(this)}/>

                <datalist id="zodiac-list">
                    <option value="Aquarius"/>
                    <option value="Pisces"/>
                    <option value="Aries"/>
                    <option value="Taurus"/>
                    <option value="Gemini"/>
                    <option value="Cancer"/>
                    <option value="Leo"/>
                    <option value="Virgo"/>
                    <option value="Libra"/>
                    <option value="Scorpio"/>
                    <option value="Sagittarius"/>
                    <option value="Capricorn"/>
                </datalist>
                
            </div>

        )
    }
}

export default RandomBark