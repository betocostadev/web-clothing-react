import React from 'react'

import { Link } from './contact-link.styles'

const ContactLink = ({ to, linkTitle, source, alter }) => {
  return (
      <Link href={to} title={linkTitle} target='_blank' rel="noopener noreferrer">
        <img src={source} alt={alter}></img>
      </Link>
  )
}

export default ContactLink