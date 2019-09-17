import React from 'react';
import './signin-signup.styles.scss';

import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

const SignInSignUp = () => (
  <section className='signin-signup'>
    <SignIn />
    <SignUp />
  </section>
);

export default SignInSignUp;