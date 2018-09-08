import React, { Component } from 'react'
import petfinder from '../../petfinder-client'
import './searchbar.css'

const pf = petfinder()

class SearchBar extends Component {
	state = {
			breeds: [],
	}

	componentDidMount () {
		this.getNewBreeds(this.props.animal)
		}
		
	getNewBreeds (animal) {
		pf.breed.list({animal})
      .then((data) => {
        if (data.petfinder.breeds) {
            this.setState({breeds: data.petfinder.breeds.breed})
        }
      })
	}

	updateBreed(e) {
		this.props.changeBreed(e.target.value)
	}

	render() {
		return(
			<div className="search-bar-container">
				<div className="title">Find Your Brrk</div>
				<div className="search-field">
          
          <label className="breed-label">Breed: </label>
          
          <input className="search-input" 
                  type="text" 
                  list="breed-list"
                  placeholder="search a breed..." 
                  onChange={this.updateBreed.bind(this)}
          />
          <datalist id="breed-list">
                  {this.state.breeds.map((breed) => 
                      <option key={breed} value={breed}/>
                  )}                  
          </datalist>
        
          
			  </div>
			</div>
		)	
	}
			
}

export default SearchBar