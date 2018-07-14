import React, { Component } from 'react'
import petfinder from '../petfinder-client'

const pf = petfinder()

class BarkDetsils extends Component {

    constructor (props) {
        super(props);
        this.state = {
            id: this.props.petId,
            selectedPet: [],
            petBreed: [],
            media: []
        }
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
            const media = data.petfinder.pet.media.photos.photo ?  data.petfinder.pet.media.photos.photo : []
            this.setState({selectedPet})
            this.setState({petBreed})
            this.setState({media})
            console.log('single', data)
            console.log('a',selectedPet)
            console.log('b',petBreed)
        })
    }

    goBack () {
        window.history.back()
    }

    render() {
        const thisPet = this.state.selectedPet
        return(
            <div className="BarkDetails">
                <div className="bark-info">
                 <div>Name: {thisPet.name}</div>
                 <div>Breed: {this.state.petBreed[0]} | {this.state.petBreed[1]}</div>
                 <div>Age: {thisPet.age}</div>
                 <div>Id: {thisPet.id}</div>
                 <div>Gender: {thisPet.sex}</div>
                 <div>Size: {thisPet.size}</div>
                 <div>Description: {thisPet.description}</div>
                 
                 
                 
                 
                 <div></div>
                 <div></div>
                 {/* <div>photo: {this.state.media}</div> */}
                </div>
            <button type="button" className="btn btn-lg btn-dark" onClick={this.goBack.bind(this)}>Go Back </button>
            </div>
        )
    }
}

export default BarkDetsils