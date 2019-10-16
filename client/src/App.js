import React, { useEffect, Suspense, lazy } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
// import logo from './logo.svg';
import Header from './components/header/header.component';
// Importing Spinner, this is not the HOC With-Spinner, its a copy we will use for lazy loading.
import Spinner from './components/spinner/spinner.component';
// ErrorBoundary is our component that gets called if we have an error when loading
import ErrorBoundary from './components/error-boundary/error-boundary.component'

import { GlobalStyle } from './global.styles';

import { selectCurrentUser } from './redux/user/user.selectors';
import { checkUserSession } from './redux/user/user.actions';

const HomePage = lazy(() => import('./pages/homepage/homepage.component'));
const ShopPage = lazy(() => import('./pages/shop/shop.component'));
const SignInSignUp = lazy(() => import('./pages/signin-signup/signin-signup.component'));
const CheckoutPage = lazy(() => import('./pages/checkout/checkout.component'));

const App = ({ checkUserSession, currentUser }) => {
  // Converted to useEffect. Using redux sagas also
  useEffect(() => {
    checkUserSession()
  }, [checkUserSession]);

  // Notice that the Header component is placed outside of the Switch
  // This makes the Header component to be rendered before the Route decides the destination
  return (
    <div>
    <GlobalStyle />
    <Header />
    <Switch>
      <ErrorBoundary>
        <Suspense fallback={<Spinner />}>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/checkout' component={CheckoutPage} />
          <Route exact
          path='/signin'
          render={() => currentUser ?
            (<Redirect to='/' />)
            : (<SignInSignUp />) }
            />
        </Suspense>
      </ErrorBoundary>
    </Switch>
    </div>
  );
}

// Check if the user is signed in, if it is, forbid the login page.
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
