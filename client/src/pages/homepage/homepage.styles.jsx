import styled from 'styled-components';

export const HomePageContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 40px;

  @media screen and (max-width: 800px) {
    padding: 0;
  }
`