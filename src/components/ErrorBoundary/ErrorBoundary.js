import React, { Component } from 'react'
import './errorboundary.css'

class ErrorBoundary extends Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }
  
    componentDidCatch(error, info) {
      this.setState({ hasError: true });
    }

    refreshPage(){
      window.location.reload()
    }

  
    render() {
      if (this.state.hasError) {
        // fallback UI
        return (
          <div className="error-container">
            <p className="error-text">Ooooops...<br/>Something went wrong...
              <button className="btn-try-again" type="button" onClick={ this.refreshPage.bind(this) }> Try Again </button>
            </p>
          </div> 
        )       
      }
      return this.props.children;
    }
  }

export default ErrorBoundary