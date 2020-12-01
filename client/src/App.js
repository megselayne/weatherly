import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';
import {Route, Redirect} from 'react-router-dom';
import StateController from './components/StateController';
import Search from './components/Search';

class App extends Component {
  constructor(){
    super()
    this.state={

    }
  }

  render(){
    return (
      <div className="App">
        <Search />
        <Route exact path='/' render={() => (<StateController currentPage='home' />)} />
      </div>
    )
  }
}

export default App;
