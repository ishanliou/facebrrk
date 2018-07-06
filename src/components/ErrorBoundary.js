import React, { Component } from 'react'

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
        return  <p>Ooooops... 
                  <button type="button" onClick={ this.refreshPage.bind(this) }> Try Again </button>
                </p>;
      }
      return this.props.children;
    }
  }

export default ErrorBoundary