import styled from 'styled-components'

export const Link = styled.a`
  border-bottom: 2px solid darkgray;
  padding: 0 0 0.2rem 0;

  &:hover, &:focus {
    border-bottom: 2px solid darkslateblue;
  }
  img {
    width: 60px;
  }

  p {
    margin: 0;
    text-align: center;
  }
`