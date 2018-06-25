import React, { Component } from 'react'
import petfinder from '../petfinder-client'

const pf = petfinder()

class SearchBar extends Component {
    state = {
        breeds: []
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

    searchBreed(e) {
        console.log('yay')
    }
    render() {
        return(
            <div>
                <label>Breed: </label>
                <input className="search-bar" 
                       type="text" 
                       list="breed-list"
                       placeholder="search a pet..." 
                       onChange={this.searchBreed.bind(this)}/>
                <datalist id="breed-list">
                    {this.state.breeds.map((breed) => 
                        <option key={breed} value={breed} />
                    )}
                    
                </datalist>

            </div>
        )
    }
        
}

export default SearchBar