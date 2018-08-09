import React, { Component } from 'react'

class RandomList extends Component{
 
    render() {
        const randomPets = this.props.randomPets
        // console.log('ooo', (Object.values(randomPets)[0]))
        console.log('rrr', (Object.entries(randomPets)[0]))
       console.log('therer', randomPets)
       
        return(
            <div>
                <div>Name: {randomPets.name}</div>
                <div>Age: {randomPets.age}</div>
                <div>Sex: {randomPets.sex}</div>
                <div>Size: {randomPets.size}</div>
                {/* <div>{randomPets.breeds.breed[0]} | {randomPets.breeds.breed[1]}</div> */}
                {/* <div>{randomPets.contact}</div> */}
                
                <div>Shelter ID: {randomPets.shelterId}</div>
                {/* <div>{randomPets.media.photos.photo[2].value}</div> */}

                
            </div>
        )
    }
}
export default RandomList