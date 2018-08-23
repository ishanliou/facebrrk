import React, { Component } from 'react'
import './randomlist.css'

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
        } return acc
        }, []) : []
      // console.log(photos)
      //  const showPhoto = photos ? Object.entries(photos) : ''
      //  console.log("showPhoto", showPhoto[0])
       
       
        return(
          <div>
          <div class="card random-list-card">
            <div>{photos.map((petPhotos, index )=> (
                 <img className="random-list-card-img" src={petPhotos} key={index}/>
            ))}</div>
            <div class="card-body">
              <h5 class="card-title">Name: {randomPets.name}</h5>
              <h6 class="card-text">Age: {randomPets.age}</h6>
              <h6 class="card-text">Sex: {randomPets.sex}</h6>
              <h6 class="card-text">Size: {randomPets.size}</h6>
              <h6 class="card-text">Breed: {Object.values(breed).map( e => e )}</h6>
              <h6 class="card-text">Contact: 
              <ul>City: {contact.city}</ul>
                <ul>State:{contact.state}</ul>
                <ul>ZipCode: {contact.zip}</ul>
                <ul>Email: {contact.email}</ul>
                <ul>Phone: {contact.phone}</ul>
              </h6>
              <h6 class="card-text">Shelter Pet ID: {randomPets.shelterPetId ? randomPets.shelterPetId: "n/a"}</h6>
              <h6 class="card-text">Shelter ID: {randomPets.shelterId}</h6>
              <h6 class="card-text"></h6>
              <h6 class="card-text"></h6>
            </div>
          </div>
          </div>

        )
    }
}
export default RandomList