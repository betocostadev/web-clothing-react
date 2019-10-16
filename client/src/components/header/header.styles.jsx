// Also import CSS to be able to share styles. Look at the last two styles to understand.
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const OptionContainerStyles = css`
  font-size: 1.1rem;
  padding: 10px 15px;
  cursor: pointer;
`

export const HeaderContainer = styled.header`
  height: 70px;
  width: 95%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;

  @media screen and (max-width: 800px) {
    width: 100%;
    height: 60px;
    padding: 10px;
  }
`

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 20px;
  margin: 0 0 0 2rem;

  @media screen and (max-width: 800px) {
    width: 45px;
    padding: 0;
    margin: 0;
  }
`
export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media screen and (max-width: 800px) {
    width: 80%;
  }
`
export const OptionLink = styled(Link)`
  ${OptionContainerStyles}
`

export const OptionDiv = styled.div`
  ${OptionContainerStyles}
`
