import React, { Component } from 'react'
import { Link } from 'react-router-dom' 
import './barklist.css'


class BarkList extends Component {  
  render(){
    const bark = this.props.bark ? this.props.bark: ''
    console.log('bark', bark)
    return(
      <div className="bark-lists">
        {bark.map((pet => (
          <div className="card" key={pet.id}>
            <Link to={`/findbrrk/${pet.id}`}>
              <img className="card-img-top" src={pet.media.photos? pet.media.photos.photo[2].value: ''} alt={pet.name}/>
            </Link>
        
            <div className="card-body">
              <div className="card-title">
                {pet.name}
              </div>

              <div className="card-text">
                <span className="sub-title">Age:</span> 
                  {pet.age}
              </div>

              <div className="card-text">
                <span className="sub-title">Sex:</span> 
                  {pet.sex}
              </div>

              <div className="card-text">
                <span className="sub-title">Breed:</span> 
                  {pet.breeds.breed}
              </div>

              <div className="card-text">
                <span className="sub-title">Location:</span> 
                  {pet.contact.city}, {pet.contact.state} {pet.contact.zip}
              </div>
              
            </div>
          </div>
      )))}
      </div>

    )
  }
}


export default BarkList