import React from 'react';

// Using the CSS in JS styles:
import { CustomButtonContainer } from './custom-button.styles';
// Using the 'default' scss styles:
// import './custom-button.styles.scss';

// The below code for CustomButton is related to using the SCSS styled component.
/* const CustomButton = ({ children, isGoogleSignIn, inverted, ...otherProps }) => (
  <button
    className={`
      ${inverted ? 'inverted' : ''} ${
        isGoogleSignIn ? 'google-sign-in' : ''
      } custom-button`} {...otherProps}>
    {children}
  </button>
) */

const CustomButton = ({ children, ...props }) => (
  <CustomButtonContainer {...props}>
    {children}
  </CustomButtonContainer>
);

export default CustomButton;