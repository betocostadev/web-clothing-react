import styled from 'styled-components'


export const Main = styled.main`
  margin: 0 0 1rem 0;
  display: flex;
  flex-direction: column;

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

export const Contents = styled.section`
  margin: 0.625rem;
`

export const LinksContainer = styled.div`
  margin: 0.5rem 0.25rem 1rem 0.25rem;
  display: flex;
  justify-content: space-evenly;
`