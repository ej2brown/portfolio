import React from 'react';

import Header from './components/header';
import Welcome from './components/welcome';
import About from './components/about';
import Projects from './components/projects';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import CssBaseline from '@material-ui/core/CssBaseline';

export default function App() {
  return (
    <Router>
      <CssBaseline />
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/">
            <Welcome />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/projects">
            <Projects />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};