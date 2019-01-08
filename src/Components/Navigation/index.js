import React from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class Navigation extends React.Component {
  render() {
    return (
      <div className='Navigation'>
        <Menu stackable>
          <Menu.Item>
            <img
              src='https://upload.wikimedia.org/wikipedia/commons/a/ab/Logo_TV_2015.png'
              alt='YOUR_LOGO'
            />
          </Menu.Item>

          <Menu.Item name='Home'>
            <Link to='/'> Home</Link>
          </Menu.Item>

          <Menu.Item name='Shop'>
            <Link to='/shop'> Shop</Link>
          </Menu.Item>

          <Menu.Item name='sign-in'>
            <Link to='/user'> Sign In</Link>
          </Menu.Item>
        </Menu>
      </div>
    );
  }
}

export default Navigation;
