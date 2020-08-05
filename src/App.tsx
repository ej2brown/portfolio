import React, { Component } from 'react';
import Header from './components/header';
import About from './components/about';
import Resume from './components/resume';
import Projects from './components/projects';


import Stepper from './components/materialui/stepper';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Stepper/>
        <About />
        <Resume />
        <Projects/>
      </div>
    );
  }
}

export default App;
