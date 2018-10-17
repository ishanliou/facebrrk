import React, { Component } from 'react'
import petfinder from '../../petfinder-client'
import './barkdetails.css'

const pf = petfinder()

class BarkDetsils extends Component {
  state = {
    id: this.props.petId,
    selectedPet: [],
    petBreed: [],
    media: [],
    email: [],
    city: [],
    state: []
  }

  componentDidMount () {
        this.getPet()
      }

  getPet () {
    const { id } = this.state
    const promise = pf.pet.get({id})
    promise.then((data) => {
        const selectedPet = data.petfinder.pet ?  data.petfinder.pet : []
        const petBreed = data.petfinder.pet.breeds.breed ?  data.petfinder.pet.breeds.breed : []
        const media = data.petfinder.pet.media.photos.photo ?  data.petfinder.pet.media.photos.photo[2].value : []
        const email = data.petfinder.pet.contact.email ? data.petfinder.pet.contact.email :[]
        const city = data.petfinder.pet.contact.city ? data.petfinder.pet.contact.city : []
        const state = data.petfinder.pet.contact.state ? data.petfinder.pet.contact.state : []
        this.setState({selectedPet})
        this.setState({petBreed})
        this.setState({media})
        this.setState({email})
        this.setState({city})
        this.setState({state})
    })}

  goBack () {
      window.history.back()
  }

  render() {
    const thisPet = this.state.selectedPet
    return(
      <div className="bark-details">
        <div className="bark-details-card">
          <div>
            <img className="bark-details-card-img-top" src={this.state.media} alt={thisPet.name}/>
          </div>
          
          <div className="bark-details-card-body">
            <div className="card-title">
              <span className="sub-title"></span> 
              {thisPet.name}
            </div>

            <div className="card-text">
              <span className="sub-title">Breed:</span> 
              {this.state.petBreed[0]} | {this.state.petBreed[1]}
            </div>

            <div className="card-text">
              <span className="sub-title">Age:</span> 
              {thisPet.age}
            </div>

            <div className="card-text">
              <span className="sub-title">Id:</span> 
              {thisPet.id}
            </div>

            <div className="card-text">
              <span className="sub-title">Gender:</span> 
              {thisPet.sex}
            </div>

            <div className="card-text">
              <span className="sub-title">Size:</span> 
              {thisPet.size}
            </div>

            <div className="card-text">
              <span className="sub-title">Location:</span> 
              {this.state.city} | {this.state.state}
            </div>

            <div className="card-text">
              <span className="sub-title">Contact:</span> 
              {this.state.email}
            </div>

            <div className="card-text text-description">
              <span className="sub-title">Description:</span> 
              {thisPet.description}
            </div>
          
            <div className="btn-container">
              <button type="button" className="btn-go-back" onClick={this.goBack.bind(this)}>Go Back </button>

            </div>
          
          </div>
        </div>      
      </div>
    )
  }
}

export default BarkDetsils