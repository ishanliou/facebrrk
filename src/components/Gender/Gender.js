import React, { Component } from 'react'
import './gender.css'

class Gender extends Component {

    updateGender(e) {
        this.props.changeGender(e.target.value)
    }
    
    render() {
        return(
            <div className="search-gender-container">
                <label className="gender-label">Gender: </label>
                <input className="gender-input" 
                       type="text" 
                       list="gender-list"
                       placeholder="any..." 
                       onChange={this.updateGender.bind(this)}
                />
                <datalist id="gender-list">
                    <option value="F">Female</option>
                    <option value="M">Male</option>
                </datalist>
            </div>
        )
    }
}

export default Gender