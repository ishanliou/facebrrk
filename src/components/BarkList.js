import React, { Component } from 'react'


class BarkList extends Component {   
    render(){
        const bark = this.props.bark
        return(
            <div className="BarkDetails">
                <div>
                    {bark.map((pet => (
                        <h4 key={pet.id}>
                            <div>Name: {pet.name} </div>
                            {/* <div>Age: {pet.age} </div>
                            <div>Sex: {pet.sex}</div>
                            <div>Breed: {pet.breeds.breed}</div>
                            <div>Location: {pet.contact.city}, {pet.contact.state} {pet.contact.zip}</div>
                            <div>Description: {pet.description}</div> */}
                            <img src={pet.media.photos.photo[2].value} alt="" />
                        </h4>)     
                ))}
                </div>
            </div>
        )
    }
}


export default BarkList