import React, { useEffect, Suspense, lazy } from 'react'
import { Main, LinksContainer, Contents } from './contact.styles'

// import ContactCard from '../../components/contact-card/contact-card.component'
// import ContactLink from '../../components/contact-link/contact-link.component'
import Spinner from '../../components/spinner/spinner.component';

const ContactCard = lazy(() => import('../../components/contact-card/contact-card.component'))
const ContactLink = lazy(() => import('../../components/contact-link/contact-link.component'))

const Contact = () => {

  useEffect(() => {
    window.scrollBy(0, 50)
  }, [])

  return (
    <Suspense fallback={<Spinner />}>
      <Main>
        <ContactCard />
        <Contents>
          <h2>Contact me</h2>
          <p>Code for the Web-Clothing PWA can be found <a href='https://github.com/betocostadev/web-clothing-react' title='source code' rel="noopener noreferrer" target='_blank'>here</a></p>
          <p>You can find me through the links below:</p>
          <LinksContainer>
            <ContactLink to='https://betocostadev.github.io/' linkTitle='Portfolio' source='./social/picture.svg' alter='Portfolio link' name='Portfolio'/>
            <ContactLink to='https://github.com/betocostadev' linkTitle='Github profile' source='./social/github.svg' alter='Github cartoonish logo' name='Github'/>
            <ContactLink to='https://www.linkedin.com/in/robertomcosta/' linkTitle='LinkedIn profile' source='./social/linkedin.svg' alter='LinkedIn cartoonish logo' name='LinkedIn'/>
            <ContactLink to='https://twitter.com/Betifler' linkTitle='Twitter profile' source='./social/twitter.svg' alter='Twitter cartoonish logo' name='Twitter'/>
          </LinksContainer>
        </Contents>
      </Main>
    </Suspense>
  )
}

export default Contact