import React from 'react';
// Using to Link from React-Router to link the logo to the home
import { Link } from 'react-router-dom';
// We will use a special syntax in React for importing SVGs
import { ReactComponent as Logo } from '../../assets/icons/crown.svg'
// Import the Auth (keep the state of the user login)
import { auth } from '../../firebase/firebase.utils';

import './header.styles.scss';
// The Link will be converted to an 'a' element when rendered, style it in the app styles.
const Header = ({ currentUser }) => (
  <header className='header'>
    <Link className='logo-container' to='/'>
      <Logo className='logo' />
    </Link>
    <div className='options'>
      <Link className='option' to='/shop'>
        SHOP
      </Link>
      <Link className='option' to='/shop'>
        CONTACT
      </Link>
      {
        currentUser ?
        <div className='option' onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
        :
        <Link className='option' to='/signin'>
          SIGN IN
        </Link>
      }
    </div>
  </header>
)

export default Header;