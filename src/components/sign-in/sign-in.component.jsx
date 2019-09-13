import React from 'react';

import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component';

import './sign-in.styles.scss';

// In this case, using a class because we will have to store what the user is typing.
class SignIn extends React.Component {
  constructor (props) {
    super (props);

    this.state = {
      email: '',
      password: ''
    }
  }

  handleSubmit = e => {
    e.preventDefault();
    console.log('form would be submited now')

    this.setState({ email: '', password: ''})
  }

  handleChange = e => {
    const {value, name} = e.target;
    console.log(value, name);
    this.setState({ [name]: value});
  }

  // Using onSubmit in the form to call for out methods
  // Using the FormInput component instead of the default
  render() {
    return (
      <section className="sign-in">
        <h2 className="title">I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            label="email"
            value={this.state.email}
            handleChange={this.handleChange}
            required />
          <FormInput
            name="password"
            type="password"
            label="password"
            value={this.state.password}
            handleChange={this.handleChange}
            required
          />

          <CustomButton type="submit"> SIGN IN </CustomButton>
        </form>
      </section>
    )
  }
}

export default SignIn;