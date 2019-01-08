import React, { Fragment } from 'react';
import {Form, Button, Header} from 'semantic-ui-react';
import './User.css';

class User extends React.Component {
  constructor(props){
    super(props);
    this.state = {isLogin: true};
  }
  register() {
    return (
    <Fragment>
      <Form className="registerForm">
      <Header as="h3">Register</Header>
    <Form.Group>
      <Form.Input label='First name' placeholder='First Name' width={6} />
      <Form.Input label='Last Name' placeholder='Last Name' width={6} />
      <Form.Input label='Address' placeholder='Adress' width={6} />
      
    </Form.Group>
    <Form.Group>
      <Form.Input label='User Name' placeholder='User Name' width={6} />
      <Form.Input type="email" label='Email' placeholder='Email' width={6} />
      <Form.Input type="password" label='Password' placeholder='Password' width={6} /> 
    </Form.Group>
    <p></p>
    <Button.Group className="bgSize">
    <Button positive>Register</Button>
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
      <Form.Input label='User Name' placeholder='User Name'  />
      <Form.Input type="password" label='Password' placeholder='Password' /> 
      <Button.Group className="bgSize">
    <Button positive>Login</Button>
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
