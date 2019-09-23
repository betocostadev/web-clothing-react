import React from 'react';
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
// Use auth to setstate and be able to pass the 'logged' state to the components that need it
// That's why we will convert the app to a class component
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';

// Notice that the Header component is placed outside of the Switch.
// This makes the Header component to be rendered before the Route decides the destination
class App extends React.Component {
  // No need of the constructor since we are controlling the state using setCurrentUser
  /* constructor() {
    super();

    this.state = {
      currentUser: null
    }
  } */

  // Close the subscription after the user have subscribed
  unsubscribeFromAuth = null;

  // We need to get the info when the user logs in/out
  // We will create the user on the DB and also setState, to make sure React is aware
  componentDidMount() {
    const {setCurrentUser} = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      // this.setState({ currentUser: user });
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          // console.log(snapShot.data());
          setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
          });
        // ), () => console.log(this.state))
        });
      } else {
        setCurrentUser(userAuth);
      }
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  render() {
    return (
      <div>
      <Header />
      <Switch>
      <Route exact path='/' component={HomePage} />
      <Route path='/shop' component={ShopPage} />
      <Route exact path='/checkout' component={CheckoutPage} />
      <Route exact
        path='/signin'
        render={() => this.props.currentUser ?
          (<Redirect to='/' />)
          : (<SignInSignUp />) }
      />
      </Switch>
      </div>
    )
  }
}

// Check if the user is signed in, if it is, forbid the login page.
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

// Dispatch current User
const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
