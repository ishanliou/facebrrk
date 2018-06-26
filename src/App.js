import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import Home from './components/Home'
import BarkDetails from './components/BarkDetails'
import SearchBar from './components/SearchBar'
import SearchLocation from './components/SearchLocation'
import petfinder from './petfinder-client'
import credentials from './credentials'

const petFinderKey = petfinder(credentials)
const pf = petfinder()

class App extends Component {

  constructor(props) {
    super(props);
    this.state ={
      animal: 'dog',
      breed: '',
      location: 'Los Angeles, CA',
      pets: []
    }
  }

  componentDidMount () {
    this.search()
  }

  search () {
    const { animal, breed, location } = this.state
    const promise = pf.pet.find({animal, breed, location, output: 'full'})
    promise.then((data) => {
      const pets = data.petfinder.pets ?  data.petfinder.pets.pet : []
      this.setState({pets})
      console.log(data)
    })
  }

  changeBreed (breed) {
    this.setState({ breed }, () => this.search())
  }

changeLocation (location) {
  this.setState({location} , () => this.search())
}

  render() {
    console.log(this.state)
    return (
      
      <div className="App">
      
        <Home />
        <SearchBar animal={this.state.animal}
                   breed={this.state.breed}
                   changeBreed={this.changeBreed.bind(this)}/>
        <SearchLocation changeLocation={this.changeLocation.bind(this)}
                        location={this.state.location}/>
        <BarkDetails bark={this.state.pets} 
                     breed={this.state.breed} 
                     location={this.state.location}/>

      </div>
    );

    
  }
}

export default App;
