import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

import Home from './components/Home';
import SearchBar from './components/SearchBar';

const API_KEY = '5daa8b029202d6ddfe64a61bbab96ce1'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Home />
        <SearchBar />
      </div>
    );
  }
}

export default App;
