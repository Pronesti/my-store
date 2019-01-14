import React, { Component,Fragment } from 'react';
import './App.css';
import Navigation from './Components/Navigation';
import {Switch, BrowserRouter, Route} from 'react-router-dom';
import Home from './Pages/Home';
import Shop from './Pages/Shop';
import User from './Pages/User';
import Purchase from './Pages/Purchase';

import firebase from 'firebase';

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDVxLD2xBd_86L7658XmPGUFmvWzslVMv4",
    authDomain: "my-store-new.firebaseapp.com",
    databaseURL: "https://my-store-new.firebaseio.com",
    projectId: "my-store-new",
    storageBucket: "my-store-new.appspot.com",
    messagingSenderId: "357065801839"
  };
  firebase.initializeApp(config);

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
