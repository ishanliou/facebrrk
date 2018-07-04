import React, { Component } from 'react'

class RandomBark extends Component {
    render() {
        return(
            <div>
                <label>Find the Match: </label>
                <input className="search-bar"
                       type="text"
                       list="zodiac-list"
                       placeholder="Find a Brrk match your Zodiac Sing"
                />

                
            </div>

        )
    }
}

export default RandomBark