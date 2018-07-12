import React, { Component } from 'react'
import petfinder from '../petfinder-client'

const pf = petfinder()

class BarkDetsils extends Component {

    constructor (props) {
        super(props);
        this.state = {
            id: this.props.petId,
            selectedPet: [],
            petBreed: []
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
            this.setState({selectedPet})
            this.setState({petBreed})
            console.log('single', data)
            console.log('a',selectedPet)
            console.log('b',petBreed)
        })
    }

    render() {
        const thisPet = this.state.selectedPet
        return(
            <div className="BarkDetails">
                <div>
                 {thisPet.age}
                 {this.state.petBreed}
                
                </div>
            
            </div>
        )
    }
}

export default BarkDetsils