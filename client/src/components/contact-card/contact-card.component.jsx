import React from 'react'

import { Container, Card, CardImageContainer, CardContent, Path } from './contact-card.styles'

const ContactCard = () => {
  return (
    <Container>
      <Card>
        <CardImageContainer>
          <img src="./megandme.jpg" alt="" />
        </CardImageContainer>

        <svg viewBox="0 0 800 500">
          <path d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400 L 800 500 L 0 500" stroke="transparent" fill="#6b6b6b"/>
          <Path d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400" stroke="pink" stroke-width="3" fill="transparent"/>
        </svg>

        <CardContent>
          <h2>I'm Beto Costa</h2>
          <p>I'm a Full-Stack Web Developer (MERN Stack) passionate about building websites and software that are meaningful and can help people achieve what they need.</p>
        </CardContent>
      </Card>
    </Container>
  )
}

export default ContactCard