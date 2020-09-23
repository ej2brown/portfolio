import React from 'react';
import {
  Switch,
  Route
} from "react-router-dom";

import Header from './components/header';
// import Welcome from './components/welcome';
import About from './components/about';
import Projects from './components/projects';

import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from '@material-ui/core/CssBaseline';

export default function App() {

  const theme = createMuiTheme({
    typography: {
      fontFamily: "Amatic SC, sans-serif",
      fontSize: 25,
    },
  });

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Route
          exact
          path="/about"
        >
          <About />
        </Route>
        <CssBaseline />
        <Header />
        <Switch>
          <Route exact path="/">
            <About />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/projects">
            <Projects />
          </Route>
        </Switch>
      </ThemeProvider>
    </div>
  );
};