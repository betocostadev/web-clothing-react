import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios'

// Stripe uses cents, so price x100
const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = parseInt(price.slice(1)) * 100;
  const publishableKey = 'pk_test_LhkVW6uZmjPanWrarrbgHmDe00WCgY3ixu';

  const onToken = token => {
    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token: token
      }
    })
      .then(response => {
        alert('succesful payment');
      })
      .catch(error => {
        console.log('Payment Error: ', error);
        alert(
          'There was an issue with your payment! Please make sure you use the provided credit card.'
        );
      });
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='Web Clothing'
      billingAddress
      shippingAddress
      image='https://sendeyo.com/up/d/f3eb2117da'
      description={`Your total is ${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  )
};

export default StripeCheckoutButton;