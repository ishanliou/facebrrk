import React, { Component } from 'react'
import petfinder from '../../petfinder-client'
import './barkdetails.css'

const pf = petfinder()

class BarkDetsils extends Component {
  state = {
    id: this.props.petId,
    selectedPet: [],
    petBreed: [],
    media: []
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
        this.setState({selectedPet})
        this.setState({petBreed})
        this.setState({media})
    })}

  goBack () {
      window.history.back()
  }

  render() {
    const thisPet = this.state.selectedPet
    return(
      <div className="bark-details">
        <div className="card bark-details-card">
        <img className="card-img-top bark-details-img" src={this.state.media} alt={thisPet.name}/>
        <div className="card-body bark-details-card-body">
          <h5 className="card-title"><span className="sub-title">Name:</span> {thisPet.name}</h5>
          <h6 className="card-text"><span className="sub-title">Breed:</span> {this.state.petBreed[0]} | {this.state.petBreed[1]}</h6>
          <h6 className="card-text"><span className="sub-title">Age:</span> {thisPet.age}</h6>
          <h6 className="card-text"><span className="sub-title">Id:</span> {thisPet.id}</h6>
          <h6 className="card-text"><span className="sub-title">Gender:</span> {thisPet.sex}</h6>
          <h6 className="card-text"><span className="sub-title">Size:</span> {thisPet.size}</h6>
          <h6 className="card-text description"><span className="sub-title">Description:</span> {thisPet.description}</h6>
          <button type="button" className="btn btn-lg btn-dark" onClick={this.goBack.bind(this)}>Go Back </button>
        </div>
      </div>      
      </div>
    )
  }
}

export default BarkDetsils