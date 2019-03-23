import React, {Component, Suspense, lazy} from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import './App.css';
const Header = lazy(() => import('./components/Header'));
const Home = lazy(() => import ('./components/Home'));
const Exercise1 = lazy(() => import ('./components/Exercise1'));
const Exercise2 = lazy(() => import ('./components/Exercise2'));
const Exercise3 = lazy(() => import ('./components/Exercise3'));
const Exercise4 = lazy(() => import ('./components/Exercise4'));

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Suspense fallback={<div>loading...</div>}>
          <Header/>
          <Route exact path='/' component={Home}/>
          <Route path='/exercise1' component={Exercise1}/>
          <Route path='/exercise2' component={Exercise2}/>
          <Route path='/exercise3' component={Exercise3}/>
          <Route path='/exercise4' component={Exercise4}/>
        </Suspense>
      </BrowserRouter>
    );
  }
}

export default App;
