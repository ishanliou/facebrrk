import React, { Component } from 'react'

class RandomList extends Component{
 
    render() {
        const randomPets = this.props.randomPets
        // console.log('ooo', (Object.values(randomPets)[0]))
        
      //  console.log('therer', randomPets)
      //  console.log('breed', (randomPets.breeds))
       const breed = randomPets.breeds? randomPets.breeds: ''
      //  console.log('contact', randomPets.contact)
       const contact = randomPets.contact? randomPets.contact : ''
      //  console.log("photo", randomPets.media)
       const photos = randomPets.media? randomPets.media.photos.photo.reduce((acc, photo) => {
        if (photo['@size'] === 'x') {
          acc.push(photo.value)
        }
        return acc
      }, []) : []
      // console.log(photos)
      //  const showPhoto = photos ? Object.entries(photos) : ''
      //  console.log("showPhoto", showPhoto[0])
       
       
        return(
            <div>
                <div>Name: {randomPets.name}</div>
                <div>Age: {randomPets.age}</div>
                <div>Sex: {randomPets.sex}</div>
                <div>Size: {randomPets.size}</div>
                <div>Breed: {Object.values(breed).map( e => e )}</div>
                <div>Contact: 
                  <ul>City: {contact.city}</ul>
                  <ul>State:{contact.state}</ul>
                  <ul>ZipCode: {contact.zip}</ul>
                  <ul>Email: {contact.email}</ul>
                  <ul>Phone: {contact.phone}</ul>
                </div>
                  
                <div>Shelter Pet ID: {randomPets.shelterPetId ? randomPets.shelterPetId: "n/a"}</div>

                <div>Shelter ID: {randomPets.shelterId}</div>
                <div>{photos.map((petPhotos, index )=> (
                  <img src={petPhotos} key={index}/>
                ))}</div>
                
            </div>
        )
    }
}
export default RandomList