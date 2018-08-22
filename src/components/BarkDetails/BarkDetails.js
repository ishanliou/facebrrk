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
          <h5 className="card-title">Name: {thisPet.name}</h5>
          <h6 className="card-text">Breed: {this.state.petBreed[0]} | {this.state.petBreed[1]}</h6>
          <h6 className="card-text">Age: {thisPet.age}</h6>
          <h6 className="card-text">Id: {thisPet.id}</h6>
          <h6 className="card-text">Gender: {thisPet.sex}</h6>
          <h6 className="card-text">Size: {thisPet.size}</h6>
          <h6 className="card-text description">Description: {thisPet.description}</h6>
          <button type="button" className="btn btn-lg btn-dark" onClick={this.goBack.bind(this)}>Go Back </button>
        </div>
      </div>      
      </div>
      // {/* <div className="BarkDetails">
      //   <div className="bark-info">
      //     <div>Name: {thisPet.name}</div>
      //     <div>Breed: {this.state.petBreed[0]} | {this.state.petBreed[1]}</div>
      //     <div>Age: {thisPet.age}</div>
      //     <div>Id: {thisPet.id}</div>
      //     <div>Gender: {thisPet.sex}</div>
      //     <div>Size: {thisPet.size}</div>
      //     <div>Description: {thisPet.description}</div>
      //     <img src={this.state.media}/>
      //   </div>
      //   <button type="button" className="btn btn-lg btn-dark" onClick={this.goBack.bind(this)}>Go Back </button> */}
      // </div>
    )
  }
}

export default BarkDetsils