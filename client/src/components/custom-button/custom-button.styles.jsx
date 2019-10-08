import styled, { css } from 'styled-components';

// Default button style
const buttonStyles = css`
  background-color: black;
  color: white;
  border: 1px solid transparent;
  line-height: 50px;
  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`

const invertedButtonStyles = css`
  min-width: 165px;
  width: auto;
  background-color: white;
  color: black;
  border: 1px solid black;

  &:hover {
    background-color: black;
    color: white;
    border: none;
  }
`

const googleSignInStyles = css`
  min-width: 165px;
  width: auto;
  line-height: 50px;
  background-color: #4285f4;
  color: white;
  border: 1px solid transparent;

  &:hover {
    background-color: #357ae8;
    border: 1px solid transparent;
  }
`

const collectionItemStyles = css`
  width: 80%;
  opacity: 0.75;
  position: absolute;
  top: 255px;

  &:hover {
    background-color: black;
    color: white;
    border: none;
    opacity: 0.8;
  }


`

// Using a JS function to decide what styles to apply

const getButtonStyles = props => {
  if (props.isGoogleSignIn) {
    return googleSignInStyles;
  }
  if(props.isCollectionItem) {
    return collectionItemStyles;
  }
  return props.inverted ? invertedButtonStyles : buttonStyles;
}

// Function is called at the end of this component
export const CustomButtonContainer = styled.button`
  height: 50px;
  letter-spacing: 0.5px;
  padding: 0 35px;
  font-size: 15px;
  text-transform: uppercase;
  font-family: 'Open Sans Condensed';
  font-weight: bolder;
  cursor: pointer;
  display: flex;
  justify-content: center;
  ${getButtonStyles}
`
