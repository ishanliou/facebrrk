import React, { Component } from 'react'
import { Link } from 'react-router-dom' 
import './barklist.css'


class BarkList extends Component {   
  render(){
    const bark = this.props.bark
    return(
      <div className="bark-lists">
        {bark.map((pet => (
      <div className="card" style={{width: "18rem"}}>
        <Link to={`/findbrrk/${pet.id}`}>
          <img className="card-img-top" src={pet.media.photos? pet.media.photos.photo[2].value: null} alt={pet.name}/>
        </Link>
     
        <div className="card-body">
          <h5 className="card-title">Name: {pet.name}</h5>
          <p className="card-text">Age: {pet.age}</p>
          <p className="card-text">Sex: {pet.sex}</p>
          <p className="card-text">Breed: {pet.breeds.breed}</p>
          <p className="card-text">Location: {pet.contact.city}, {pet.contact.state} {pet.contact.zip}</p>
          {/* <p className="card-text">Description: {pet.description}</p> */}
        </div>
      </div>
      )))}
      </div>

      // {/* // <div className="BarkLists">
      // //   <div>
      // //     {bark.map((pet => ( */}
      // {/* //       <div className="display-barks" key={pet.id}>
      // //         <div>Name: {pet.name} </div>
      // //         <div>Age: {pet.age} </div>
      // //         <div>Sex: {pet.sex}</div>
      // //         <div>Breed: {pet.breeds.breed}</div>
      // //         <div>Location: {pet.contact.city}, {pet.contact.state} {pet.contact.zip}</div>
      // //         {/* <div>Description: {pet.description}</div> */}
      // {/* //         <Link to={`/findbrrk/${pet.id}`}>
      // //             <img src={pet.media.photos? pet.media.photos.photo[2].value: null} alt={pet.name} />
      // //         </Link>
      // //       </div> */}
      // {/* //     )))} */}
      // {/* //   </div> */}
      // {/* // </div> */} 
    )
  }
}


export default BarkList