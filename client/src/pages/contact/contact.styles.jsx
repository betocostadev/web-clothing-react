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
    color: #7d7d7d;
    font-size: 1.1rem;
    &:hover, &:focus {
      color: darkslateblue;
    }
  }

  @media only screen and (min-width: 501px) {
    margin: 1rem 1rem 2rem 1rem;
    flex-direction: row;
  }
`

export const Contents = styled.section`
  margin: 0.625rem;
  p {
    font-size: 1.1rem;
  }
  @media only screen and (min-width: 501px) {
    flex: 1.2;
  }
  @media only screen and (min-width: 900px) {
    flex: 1.5;
  }

  @media only screen and (min-width: 1200px) {
    margin: 2% 10% 10% 2%;
    p {
      font-size: 1.3rem;
    }
  }
`

export const LinksContainer = styled.div`
  margin: 0.5rem 0.25rem 1rem 0.25rem;
  display: flex;
  justify-content: space-evenly;
`