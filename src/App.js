import React, { Component } from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Hola from './components/hola/Hola';
import Proyectos from './components/proyectos/Proyectos';
import Background from './components/background/Background';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Navbar/>
        <Background/>
        <Hola/>
        <Proyectos/>
      </div>
    );
  }
}

export default App;
