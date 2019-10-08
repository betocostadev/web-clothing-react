import React, { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
// import logo from './logo.svg';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInSignUp from './pages/signin-signup/signin-signup.component';
import CheckoutPage from './pages/checkout/checkout.component';

import Header from './components/header/header.component';

import { selectCurrentUser } from './redux/user/user.selectors';
import { checkUserSession } from './redux/user/user.actions';

const App = ({ checkUserSession, currentUser }) => {
  // Converted to useEffect. Using redux sagas also
  useEffect(() => {
    checkUserSession()
  }, [checkUserSession])

  // Notice that the Header component is placed outside of the Switch
  // This makes the Header component to be rendered before the Route decides the destination
  return (
    <div>
    <Header />
    <Switch>
    <Route exact path='/' component={HomePage} />
    <Route path='/shop' component={ShopPage} />
    <Route exact path='/checkout' component={CheckoutPage} />
    <Route exact
      path='/signin'
      render={() => currentUser ?
        (<Redirect to='/' />)
        : (<SignInSignUp />) }
    />
    </Switch>
    </div>
  )
}

// Check if the user is signed in, if it is, forbid the login page.
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
