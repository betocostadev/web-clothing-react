import styled from 'styled-components'


export const Main = styled.main`
  margin: 0 0 1rem 0;

  img {
    max-width: 100%;
  }

  a {
    font-weight: bold;
    color: darkgray;
    &:hover, &:focus {
      color: darkslateblue;
    }
  }
`

export const LinksContainer = styled.section`
  margin: 0.5rem 0.25rem 1rem 0.25rem;
  display: flex;
  justify-content: space-evenly;
`