import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

import Home from './components/Home';
import SearchBar from './components/SearchBar';
import petfinder from './petfinder-client'
import credentials from './credentials'

const petFinderKey = petfinder(credentials)

class App extends Component {

  constructor(props) {
    super(props);
    this.state ={
      animal: 'dog',
      breed: 'Havanese',
      location: 'San Francisco, CA',
      pets: []
    }
  }

  componentDidMount() {
    const { animal, breed, location } = this.state
    const promise = petFinderKey.pet.find({animal, breed, location, output: 'full'})
    promise.then((data) => {
      const pets =data.petfinder.pets ? data.petfinder.pets.pet : []
      this.setState({pets})
    })
  }

  render() {
    return (
      <div className="App">
      {this.state.pets.map((pet => {
        <h1>{pet.name}</h1>
        {JSON.stringify(this.state, null, 4)}
      }))}
        <Home />
        <SearchBar />
      </div>
    );
  }
}

export default App;
