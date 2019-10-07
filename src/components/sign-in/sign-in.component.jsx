import React, { useState } from 'react';

import { connect } from 'react-redux'

import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component';

import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions'

import './sign-in.styles.scss';

// In this case, using a class because we will have to store what the user is typing.
const SignIn = ({ emailSignInStart, googleSignInStart }) => {
  const [ userCredentials, setCredentials] = useState({ email: '', password: '' })

  const { email, password } = userCredentials;

  const handleSubmit = async event => {
    event.preventDefault();
    // try / catch removed - redux will handle with sagas now
    emailSignInStart(email, password);
  }

  const handleChange = event => {
    const {value, name} = event.target;
    setCredentials({...userCredentials, [name]: value});
  }

  // Using onSubmit in the form to call for out methods
  // Using the FormInput component instead of the default
  return (
    <section className="sign-in">
      <h2 className="title">I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          label="email"
          value={email}
          handleChange={handleChange}
          required />
        <FormInput
          name="password"
          type="password"
          label="password"
          value={password}
          handleChange={handleChange}
          required
        />

        <div className="buttons">
          <CustomButton type="submit">SIGN IN</CustomButton>
          <CustomButton type="button" onClick={googleSignInStart} isGoogleSignIn>SIGN IN WITH GOOGLE</CustomButton>
        </div>
      </form>
    </section>
  )
}

const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) => dispatch(emailSignInStart({email, password}))
})

export default connect(null, mapDispatchToProps)(SignIn);