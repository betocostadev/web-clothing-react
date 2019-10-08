import React from 'react';
// Use connect to get the CartItems
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selectors';
// Close the dropdown when the user goes to the checkout page
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import './cart-dropdown.styles.scss'

// Passing dispatch to use toggleCartHidden to close the menu
const CartDropdown = ({ cartItems, history, dispatch }) => (
  <div className='cart-dropdown'>
    <div className='cart-items'>
      {
        cartItems.length ?
        cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)
        : <span className='empty-message'>Your cart is empty</span>
      }
    </div>
    <CustomButton
      onClick={() => {
          history.push('/checkout');
          dispatch(toggleCartHidden());
        }}
    >Go to checkout</CustomButton>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});


export default withRouter(connect(mapStateToProps)(CartDropdown));