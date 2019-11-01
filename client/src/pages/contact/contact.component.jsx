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
          <p>
            I hope you liked this Web App <span role="img" aria-label='happy face'>😅</span>. I'm dedicated to software development, as of now, with a focus in Front-end | Full-stack Development using JavaScript technologies like React and Node. For this PWA, I have used <a href='https://reactjs.org/' rel="noopener noreferrer" target='_blank' >React</a> with Redux and Google's <a href='https://firebase.google.com/' rel="noopener noreferrer" target='_blank' >Firebase</a> for login and storage. Stripe was used for payments, but I hope you don't buy anything, as this is just an example e-commerce site.
          </p>
          <p>Source Code for the Web-Clothing PWA can be found <a href='https://github.com/betocostadev/web-clothing-react' title='source code' rel="noopener noreferrer" target='_blank'>here</a>.</p>
          <p>You can find me through the links below:</p>
          <LinksContainer>
            <ContactLink to='https://betocostadev.github.io/' linkTitle='Portfolio' source='./social/picture.svg' alter='Portfolio link' name='Portfolio'/>
            <ContactLink to='https://github.com/betocostadev' linkTitle='Github profile' source='./social/github.svg' alter='Github cartoonish logo' name='Github'/>
            <ContactLink to='https://www.linkedin.com/in/robertomcosta/' linkTitle='LinkedIn profile' source='./social/linkedin.svg' alter='LinkedIn cartoonish logo' name='LinkedIn'/>
            <ContactLink to='https://twitter.com/Betifler' linkTitle='Twitter profile' source='./social/twitter.svg' alter='Twitter cartoonish logo' name='Twitter'/>
          </LinksContainer>
          <p>Icons by <a target="_blank" rel="noopener noreferrer" href="https://icons8.com">Icons8</a></p>
        </Contents>
      </Main>
    </Suspense>
  )
}

export default Contact