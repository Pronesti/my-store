import React, { Component,Fragment } from 'react';
import './App.css';
import Navigation from './Components/Navigation';
import {Switch, BrowserRouter, Route} from 'react-router-dom';
import Home from './Pages/Home';
import Shop from './Pages/Shop';
import User from './Pages/User';
import Purchase from './Pages/Purchase';

class App extends Component {
  render() {
    return (
      <div className="App">
      <BrowserRouter>
      <Fragment>
      <Navigation />
      <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/shop" component={Shop}/>
      <Route path="/user" component={User}/>  
      <Route path="/purchase" component={Purchase}/>   
      </Switch>
      </Fragment>
  </BrowserRouter>
      </div>
    );
  }
}

export default App;
