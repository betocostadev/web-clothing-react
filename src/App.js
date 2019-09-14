import React from 'react';
import { Switch, Route } from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInSignUp from './pages/signin-signup/signin-signup.component';
import Header from './components/header/header.component';
// Use auth to setstate and be able to pass the 'logged' state to the components that need it
// That's why we will convert the app to a class component
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

// Notice that the Header component is placed outside of the Switch.
// This makes the Header component to be rendered before the Route decides the destination
class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }

  // Close the subscription after the user have subscribed
  unsubscribeFromAuth = null;

  // We need to get the info when the user logs in/out
  // We will create the user on the DB and also setState, to make sure React is aware
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      // this.setState({ currentUser: user });
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          // console.log(snapShot.data());
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          }, () => console.log(this.state))
        });
      } else {
        this.setState({ currentUser: userAuth });
      }
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  render() {
    return (
      <div>
      <Header currentUser={this.state.currentUser}/>
      <Switch>
      <Route exact path='/' component={HomePage} />
      <Route path='/shop' component={ShopPage} />
      <Route path='/signin' component={SignInSignUp} />
      </Switch>
      </div>
    )
  }
}

export default App;
