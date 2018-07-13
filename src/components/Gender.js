import React, { Component } from 'react'

class Gender extends Component {

    updateGender(e) {
        this.props.changeGender(e.target.value)
    }
    
    render() {
        return(
            <div>
                <label className="label">Gender: </label>
                <input className="search-bar" 
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