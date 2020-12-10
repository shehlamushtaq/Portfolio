import './App.css';
import React, {useState} from 'react';
import './components/styles.css'

import Menu from './components/Menu';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from './components/Home';
import Qualification from './components/Qualfication';
import Projects from './components/Projects';
import Contact from './components/Contact';


function App() {
  
  return (
    <Router>

    <div>
      <Menu />

      <Switch>

        <Route path="/qualification">
          <Qualification />
        </Route>
        <Route path="/projects">
          <Projects/>
        </Route>
        <Route path="/contact">
          <Contact/>
        </Route>
        <Route path="/">
          <Home/>
        </Route>

      </Switch>
       
      

    </div>
</Router>
  );
}

export default App;
