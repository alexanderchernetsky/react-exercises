import React, { Component } from 'react';
import './App.css';
import Exercise1 from './components/Exercise1';
import Exercise2 from './components/Exercise2';
import Exercise3 from './components/Exercise3';
import Header from './components/Header';
import Home from './components/Home';
import {BrowserRouter, Route} from "react-router-dom";

class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <Header />
          <Route exact path='/' component={Home}/>
          <Route path='/exercise1' component={Exercise1}/>
          <Route path='/exercise2' component={Exercise2}/>
          <Route path='/exercise3' component={Exercise3}/>
        </BrowserRouter>
    );
  }
}

export default App;
