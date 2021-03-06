import React, { Component } from 'react'
import './randomlist.css'

class RandomList extends Component{
  render() {
    const randomPets = this.props.randomPets
    const breed = randomPets.breeds? randomPets.breeds: ''
    const contact = randomPets.contact? randomPets.contact : ''
    const photos = randomPets.media? randomPets.media.photos.photo.reduce((acc, photo) => {
    if (photo['@size'] === 'x') {
      acc.push(photo.value)
    } return acc
    }, []) : []      
      
    return(
      <div className="random-list-container">
      <div className="random-list">
        <div className="random-list-card-container">
          {photos.map((petPhotos, index )=> (
            <img className="random-list-card-img" src={petPhotos} key={index} alt={randomPets.name}/>
          ))}
        </div>
        <div className="random-list-card-body">
          <div className="card-title">{randomPets.name}</div>
          <div className="card-text">
            <span className="sub-title">Age:</span> 
              {randomPets.age}
          </div>

          <div className="card-text">
            <span className="sub-title">Sex:</span> 
              {randomPets.sex}
          </div>

          <div className="card-text">
            <span className="sub-title">Size:</span> 
              {randomPets.size}
          </div>

          <div className="card-text">
            <span className="sub-title">Breed:</span> 
              {Object.values(breed).map( e => e )}
          </div>

          <div className="card-text">
            <span className="sub-title">Contact:</span>
          </div>

          <div>
            <div className="card-text">
              <span className="sub-title">City:</span>
                {contact.city}
            </div>

            <div className="card-text">
              <span className="sub-title">State:</span>
                {contact.state}
            </div>

            <div className="card-text">
              <span className="sub-title">ZipCode:</span> 
                {contact.zip}
            </div>

            <div className="card-text">
              <span className="sub-title">Email:</span> 
                {contact.email}
            </div>

            <div className="card-text">
              <span className="sub-title">Phone:</span>
                {contact.phone}
            </div>

            <div className="card-text">
              <span className="sub-title">Shelter Pet ID:</span> 
                {randomPets.shelterPetId ? randomPets.shelterPetId: "n/a"}
            </div>

            <div className="card-text">
              <span className="sub-title">Shelter ID:</span> 
                {randomPets.shelterId}
            </div>

          </div>
        </div>
      </div>
    </div>
    )
  }
}
export default RandomList