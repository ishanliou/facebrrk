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
          <div className="card random-list-card">
            <div>{photos.map((petPhotos, index )=> (
                 <img className="random-list-card-img" src={petPhotos} key={index} alt={randomPets.name}/>
            ))}</div>
            <div className="card-body">
              <h5 className="card-title">Name: {randomPets.name}</h5>
              <h6 className="card-text"><span className="sub-title">Age:</span> {randomPets.age}</h6>
              <h6 className="card-text"><span className="sub-title">Sex:</span> {randomPets.sex}</h6>
              <h6 className="card-text"><span className="sub-title">Size:</span> {randomPets.size}</h6>
              <h6 className="card-text"><span className="sub-title">Breed:</span> {Object.values(breed).map( e => e )}</h6>
              <h6 className="card-text"><span className="sub-title">Contact:</span></h6>
              <div>
                <h6 className="card-text"><span className="sub-title">City:</span>{contact.city}</h6>
                <h6 className="card-text"><span className="sub-title">State:</span>{contact.state}</h6>
                <h6 className="card-text"><span className="sub-title">ZipCode:</span> {contact.zip}</h6>
                <h6 className="card-text"><span className="sub-title">Email:</span> {contact.email}</h6>
                <h6 className="card-text"><span className="sub-title">Phone:</span>{contact.phone}</h6>
              </div>
              <h6 className="card-text"><span className="sub-title">Shelter Pet ID:</span> {randomPets.shelterPetId ? randomPets.shelterPetId: "n/a"}</h6>
              <h6 className="card-text"><span className="sub-title">Shelter ID:</span> {randomPets.shelterId}</h6>
            </div>
          </div>
          </div>

        )
    }
}
export default RandomList