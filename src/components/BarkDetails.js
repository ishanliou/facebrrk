import React, { Component } from 'react'

class BarkDetsils extends Component {
    render() {
        const petId = this.props.petId
        return(
            <div className="BarkDetails">
                <div>
                {petId}
                </div>
            
            </div>
        )
    }
}

export default BarkDetsils