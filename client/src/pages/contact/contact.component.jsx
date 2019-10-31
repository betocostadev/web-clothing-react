import React from 'react';
import { Main } from './contact.styles'

import ContactCard from '../../components/contact-card/contact-card.component'

const Contact = () => {
  // console.log(data)
  return (
    <Main>
      <ContactCard />
      <p>Hello World!</p>
      <p>Nachos</p>
    </Main>
  )
}

export default Contact