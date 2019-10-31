import React from 'react';
import { Main, LinksContainer } from './contact.styles'

import ContactCard from '../../components/contact-card/contact-card.component'
import ContactLink from '../../components/contact-link/contact-link.component'

const Contact = () => {
  // console.log(data)
  return (
    <Main>
      <ContactCard />
      <h2>Contact me</h2>
      <p>Code for the Web-Clothing PWA can be found <a href='https://github.com/betocostadev/web-clothing-react' title='source code' rel="noopener noreferrer" target='_blank'>here</a></p>
      <p>You can contact me by using my Portfolio or by one of the social media links below:</p>
      <LinksContainer>
        <ContactLink to='https://betocostadev.github.io/' linkTitle='Portfolio' source='./social/picture.svg' alter='Portfolio link'/>
        <ContactLink to='https://github.com/betocostadev' linkTitle='Github profile' source='./social/github.svg' alter='Github cartoonish logo'/>
        <ContactLink to='https://www.linkedin.com/in/robertomcosta/' linkTitle='LinkedIn profile' source='./social/linkedin.svg' alter='LinkedIn cartoonish logo'/>
        <ContactLink to='https://twitter.com/Betifler' linkTitle='Twitter profile' source='./social/twitter.svg' alter='Twitter cartoonish logo'/>
      </LinksContainer>
    </Main>
  )
}

export default Contact