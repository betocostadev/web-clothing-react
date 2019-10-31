import styled, { keyframes } from 'styled-components'

// CARD by Janne Leppanen
// Converted for React with Styled components from
// Original: https://codepen.io/JanneLeppanen/pen/EMRrOX?editors=1100

// ANIMATIONS
const LineFadeIn = keyframes`
  0% {
    opacity: 0; d: path("M 5 300 Q 0 300 0 300 Q 0 300 0 300 C 0 300 0 300 0 300 Q 0 300 0 300 ");
    stroke: #fff;
  }
  50% {
    opacity: 1; d: path("M 0 300 Q 50 300 100 300 Q 250 300 350 300 C 350 300 500 300 650 300 Q 750 300 800 300");
    stroke: #888BFF;
  }
  100% {
    opacity: 1; d: path("M -2 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 802 400");
    stroke: #fff;
  }
`
const ContentFadeIn = keyframes`
  0% {
    transform: translateY(-1rem);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`

const ImageFadeIn = keyframes`
  0% {
      transform: translate(-0.5rem, -0.5rem) scale(1.05);
      opacity: 0;
      filter: blur(2px);
    }
  50% {
      opacity: 1;
      filter: blur(2px);
    }
  100% {
      transform: translateY(0) scale(1.0);
      opacity: 1;
      filter: blur(0);
    }
`

// STYLES
export const Container = styled.div`
  max-width: 100vw;
  margin: 0.25rem;
  border-radius: 10px;
  line-height: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 75vh;
  background: #6b6b6b;
`

export const Card = styled.div`
  position: relative;
  background: #6b6b6b;
  width: 100%;
  height: 75vh;
  border-radius: 6px;
  padding: 2rem;
  color: #aaa;
  box-shadow: 0 0.25rem .25rem rgba(0,0,0,0.2), 0 0 1rem rgba(0,0,0,0.2);
  overflow: hidden;

  svg {
    position: absolute;
    left: 0;
    top: 110px;
  }
`

export const Path = styled.path`
  opacity: 0;
  animation: ${LineFadeIn} 0.8s 0.8s forwards ease-in;
`

export const CardContent = styled.div`
  margin-top: 0.5rem;
  opacity: 0;
  animation: ${ContentFadeIn} 0.8s 1.6s forwards;

  h2 {
    color: white;
    margin: 0 0 0.5rem 0;
    font-weight: 800;
    letter-spacing: 0.01em;
  }
  p {
    color: #f9fcfc;
    font-size: 1.1rem;
    letter-spacing: 1px;
    margin: 0 0 1rem 0;
  }
`
export const CardImageContainer = styled.div`
  margin: -2rem -2rem 0.75rem -2rem;

  img {
    opacity: 0;
    animation: ${ImageFadeIn} 0.8s 1.4s forwards;
  }
`


// export default Container