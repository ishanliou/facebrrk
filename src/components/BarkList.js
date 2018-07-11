import React, { Component } from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom' 


class BarkList extends Component {   
    render(){
        const bark = this.props.bark
        return(
            <div className="BarkLists">
                <div>
                    {bark.map((pet => (
                        <h4 key={pet.id}>
                            <div>Name: {pet.name} </div>
                            <div>Age: {pet.age} </div>
                            <div>Sex: {pet.sex}</div>
                            <div>Breed: {pet.breeds.breed}</div>
                            <div>Location: {pet.contact.city}, {pet.contact.state} {pet.contact.zip}</div>
                            {/* <div>Description: {pet.description}</div> */}
                            <Link to={`/findbrrk/${pet.id}`}>
                                <img src={pet.media.photos.photo[2].value} alt="" />
                            </Link>
                        </h4>)     
                ))}
                </div>
            </div>
        )
    }
}


export default BarkList