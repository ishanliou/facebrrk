import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import Home from './components/Home'
import BarkList from './components/BarkList'
import SearchBar from './components/SearchBar'
import SearchLocation from './components/SearchLocation'
import Gender from './components/Gender'
import ErrorBoundary from './components/ErrorBoundary'
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
      sex: '',
      location: 'Los Angeles, CA',
      pets: []
    }
  }

  componentDidMount () {
    this.search()
  }

  search () {
    const { animal, breed, location, sex } = this.state
    const promise = pf.pet.find({animal, breed, location, sex, output: 'full'})
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

changeGender (sex) {
  this.setState({ sex } , () => this.search())
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
        <Gender changeGender={this.changeGender.bind(this)}/>
        <ErrorBoundary>
        <BarkList bark={this.state.pets} 
                     breed={this.state.breed} 
                     location={this.state.location}/>
        </ErrorBoundary>
      </div>
    );

    
  }
}

export default App;
