import React from 'react';
// Using to Link from React-Router to link the logo to the home
// Using LINK from header.styles.jsx
// import { Link } from 'react-router-dom';
// Using Connect for Redux, to send the user state
import { connect } from 'react-redux';
// Import CreateStructured selector from reselect to map state using memoization
import { createStructuredSelector } from 'reselect';
// Import the Auth (keep the state of the user login)
import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
// The cart and user selectors
import { selectCardHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
// We will use a special syntax in React for importing SVGs:
import { ReactComponent as Logo } from '../../assets/icons/crown.svg'

// Using CSS in JS for this component
import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink, OptionDiv } from './header.styles';

// import './header.styles.scss';
// The Link will be converted to an 'a' element when rendered, style it in the app styles.
const Header = ({ currentUser, hidden }) => (
  <HeaderContainer>
    <LogoContainer to='/'>
      <Logo className='logo' />
    </LogoContainer>
    <OptionsContainer>
      <OptionLink to='/shop'>
        SHOP
      </OptionLink>
      <OptionLink to='/shop'>
        CONTACT
      </OptionLink>
      {
        currentUser ?
        <OptionDiv onClick={() => auth.signOut()}>
          SIGN OUT
        </OptionDiv>
        :
        <OptionLink to='/signin'>
          SIGN IN
        </OptionLink>
      }
      <CartIcon />
    </OptionsContainer>
    { hidden ? null : <CartDropdown /> }
  </HeaderContainer>
);

// must use this name as it is a redux codebase
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCardHidden
});

// Needs the function that allows us to access the state and the component
export default connect(mapStateToProps)(Header);