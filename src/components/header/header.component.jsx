import React from 'react';
// Using to Link from React-Router to link the logo to the home
import { Link } from 'react-router-dom';

import './header.styles.scss';
// We will use a special syntax in React for importing SVGs
import { ReactComponent as Logo } from '../../assets/icons/crown.svg'

// The Link will be converted to an 'a' element when rendered, style it in the app styles.
const Header = () => (
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
    </div>
  </header>
)

export default Header;