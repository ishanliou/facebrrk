import React, { Component } from 'react'

class RandomList extends Component{
 
    render() {
        const randomPets = this.props.randomPets
        console.log('ooo', (Object.values(randomPets)[0]))
        console.log('rrr', (Object.entries(randomPets)[0]))
        return(
            <div>yay! random!
             
            </div>
        )
    }
}
export default RandomList