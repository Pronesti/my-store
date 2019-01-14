import React, { Fragment } from 'react';
import {Form, Button, Header} from 'semantic-ui-react';
import './User.css';
import firebase from 'firebase';

class User extends React.Component {
  constructor(props){
    super(props);
    this.state = {isLogin: true,
       userName: "", email:"", password: "", firstName: "", lastName: "", address: "", generic: "https://pbs.twimg.com/media/C8Q1VZkXcAAPNP6.jpg"};
       this.accessUser = this.accessUser.bind(this);
       this.createNewUser = this.createNewUser.bind(this);
       
  }


  handleChange(e) {

    this.setState({
     [e.target.name] : e.target.value
    });
  }


  createNewUser(){
    const createToDatabase = this.createToDatabase.bind(this);

    const {email, password, userName, generic} = this.state;
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(function(user) {
     user.user.updateProfile({displayName: userName, photoURL: generic});
     createToDatabase(user.user);
    })
    .catch(function(error) {
      console.log(error);
    });
  }

  createToDatabase(user){
    const {displayName, photoURL, uid} = user;
    const {firstName, lastName, address, email} = this.state;
    firebase.database().ref('users/' + uid).set({
      username: displayName,
      email: email,
      profile_picture : photoURL,
      firstName: firstName,
      lastName: lastName,
      address: address
    });
  }


  accessUser(){
    const {email, password} = this.state;
    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode + errorMessage);
      // ...
    });
  }

  register() {
    return (
    <Fragment>
      <Form className="registerForm">
      <Header as="h3">Register</Header>
    <Form.Group>
      <Form.Input name="firstName" label='First name' placeholder='First Name' width={6} onChange={(e) => this.handleChange(e)} />
      <Form.Input name="lastName" label='Last Name' placeholder='Last Name' width={6} onChange={(e) => this.handleChange(e)} />
      <Form.Input name="address" label='Address' placeholder='Adress' width={6} onChange={(e) => this.handleChange(e)} />
      
    </Form.Group>
    <Form.Group>
      <Form.Input name="userName" label='User Name' placeholder='User Name' width={6} onChange={(e) => this.handleChange(e)} />
      <Form.Input name="email" type="email" label='Email' placeholder='Email' width={6} onChange={(e) => this.handleChange(e)} />
      <Form.Input name="password" type="password" label='Password' placeholder='Password' width={6} onChange={(e) => this.handleChange(e)} /> 
    </Form.Group>
    <p></p>
    <Button.Group className="bgSize">
    <Button positive onClick={this.createNewUser}>Register</Button>
    <Button.Or />
    <Button onClick={() => this.setState({isLogin: true})}>Cancel</Button>
  </Button.Group>
  </Form>
  </Fragment>
      );
  }

  login() {
    return (
    <Fragment>
      <Form className="loginForm">
      <Header as="h3">Login</Header>
      <Form.Input name="email" label='Email' placeholder='Email' onChange={(e) => this.handleChange(e)} />
      <Form.Input name="password" type="password" label='Password' placeholder='Password' onChange={(e) => this.handleChange(e)} /> 
      <Button.Group className="bgSize">
    <Button positive onClick={this.accessUser}>Login</Button>
    <Button.Or />
    <Button onClick={() => this.setState({isLogin: false})}>Register</Button>
  </Button.Group>
      </Form>
    </Fragment>);
  }

  render() {
    if (this.state.isLogin) {
      return this.login();
    } else {
      return this.register();
    }
  }
}

export default User;
