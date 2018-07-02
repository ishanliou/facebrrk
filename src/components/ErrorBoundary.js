import React, { Component } from 'react'

class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }
  
    componentDidCatch(error, info) {
      // Display fallback UI
      this.setState({ hasError: true });
    }

    refreshPage(){
      window.location.reload()
    }

  
    render() {
      if (this.state.hasError) {
        // You can render any custom fallback UI
        return  <p>Ooooops... 
                  <button type="button" onClick={ this.refreshPage.bind(this) }> Try Again </button>
                </p>;
      }
      return this.props.children;
    }
  }

export default ErrorBoundary