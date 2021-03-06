import React, { Component } from 'react'
import './App.css'
import Home from './components/Home/Home'
import BarkList from './components/BarkList/BarkList'
import SearchBar from './components/SearchBar/SearchBar'
import SearchLocation from './components/SearchLocation/SearchLocation'
import Gender from './components/Gender/Gender'
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary'
import RandomBark from './components/RandomBark/RandomBark'
import Navbar from './components/Navbar/Navbar'
import About from './components/About/About'
import Footer from './components/Footer/Footer'
import petfinder from './petfinder-client'
import credentials from './credentials'
import { Route, Switch } from 'react-router-dom' 
import BarkDetsils from './components/BarkDetails/BarkDetails';
import RandomList from './components/RandomList/RandomList';

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
    })
  }

  random () {
    const { animal, breed, location, sex } = this.state
    const promise = pf.pet.getRandom({animal, breed, location, sex, output: 'full'})
    promise.then((data) => {
      this.setState({
        randomPets: data.petfinder.pet
        })
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
    return (
      <div className="App">
        <Navbar />
          
        <Route  path="/findbrrk" render={()=> {
          return (
            <div>
              <SearchBar  animal={this.state.animal}
                          breed={this.state.breed}
                          changeBreed={this.changeBreed.bind(this)} />
              <SearchLocation changeLocation={this.changeLocation.bind(this)}
                              location={this.state.location} />                 
              <Gender changeGender={this.changeGender.bind(this)}/>
            </div>
          )}} 
        /> 

        <Route path="/match" render= {() => {
              return(
              <RandomBark getRandomPet={this.getRandomPet.bind(this)} />
              )
            }}
            />
        
        <div className="main-container">
          <Switch>
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
              )}} 
            />

            <Route path="/match" render={() => {
              return <RandomList randomPets={this.state.randomPets}/>
              }}
            />

            <Route path="/:petId" render={(route) => {
              const petId = route.match.params.petId
              return(
                <BarkDetsils petId={ petId }/>
              )}}
            />
          </Switch>
        </div>
        <Footer />
    </div>
    )
  }
}

export default App;
