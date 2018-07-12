import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import Home from './components/Home'
import BarkList from './components/BarkList'
import SearchBar from './components/SearchBar'
import SearchLocation from './components/SearchLocation'
import Gender from './components/Gender'
import ErrorBoundary from './components/ErrorBoundary'
import RandomBark from './components/RandomBark'
import Navbar from './components/Navbar'
import About from './components/About'
import petfinder from './petfinder-client'
import credentials from './credentials'
import { Route, Switch, Redirect, Link } from 'react-router-dom' 
import BarkDetsils from './components/BarkDetails';

const petFinderKey = petfinder(credentials)
const pf = petfinder()

class App extends Component {

  constructor(props) {
    super(props);
    this.state ={
      animal: 'dog',
      breed: 'French Bulldog',
      sex: '',
      location: 'Los Angeles, CA',
      pets: [],
      randomPets: []
    }
  }

  componentDidMount () {
    this.search()
    this.random()
  }

  search () {
    const { animal, breed, location, sex } = this.state
    const promise = pf.pet.find({animal, breed, location, sex, output: 'full'})
    promise.then((data) => {
      const pets = data.petfinder.pets ?  data.petfinder.pets.pet : []
      this.setState({pets})
      // console.log(data)
    })
  }

  random () {
    const { animal, breed, location, sex } = this.state
    const promise = pf.pet.getRandom({animal, breed, location, sex, output: 'full'})
    promise.then((data) => {
      const  randomPets = data.petfinder.randomPets ?  data.petfinder.pets.pet : []
      this.setState({randomPets})
      console.log('randomPets',data)
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

  getRandomPet (randomPets) {
    this.setState({randomPets} , () => this.random())
  }

  render() {
    console.log(this.state)
    return (
      
      <div className="App"> 
        <Route exact path="/" component={ Home } /> 
        <Route path="/home" component={ Home } />
        <Route path="/about" component={ About } />
        <Route exact path="/findbrrk" render={()=> {
          return ( 
            <ErrorBoundary>
              <BarkList  bark={this.state.pets} 
                              breed={this.state.breed} 
                              location={this.state.location}
                              randomPets={this.state.randomPets} />
            </ErrorBoundary>
          )                              
        }} />
        <Route path="/findbrrk/:petId" render={(route) => {
          // console.log(route.match.params.petId)
          const petId = route.match.params.petId
          return(
            <BarkDetsils petId={ petId }/>
          )
        }}/>
             
      <div className="side">
        <Navbar />
  
        <Route exact path="/findbrrk" render={()=> {
          return (
            <div>
              <h1 className="title">Find Your Brrk</h1>
              <SearchBar  animal={this.state.animal}
                          breed={this.state.breed}
                          changeBreed={this.changeBreed.bind(this)} />
              <SearchLocation changeLocation={this.changeLocation.bind(this)}
                              location={this.state.location} />                 
              <Gender changeGender={this.changeGender.bind(this)}/>
              <RandomBark getRandomPet={this.getRandomPet.bind(this)} />
            </div>
          )
        }} /> 

        
      </div>

        {/* <div className="main-container"> */}
          {/* <ErrorBoundary>
            <BarkList bark={this.state.pets} 
                      breed={this.state.breed} 
                      location={this.state.location}
                      randomPets={this.state.randomPets}/>
            </ErrorBoundary> */}

            
        {/* </div> */}
      </div>
    );

    
  }
}

export default App;
