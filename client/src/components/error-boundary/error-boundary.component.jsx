import React from 'react'

import { ErrorImageOverlay, ErrorImageContainer, ErrorImageText } from './error-boundary.styles'

class ErrorBoundary extends React.Component {
  constructor() {
    super()

    this.state = {
      hasErrored: false
    }
  }

  static getDerivedStateFromError(error) {
    // Process the error
    return { hasErrored: true }
  }

  componentDidCatch(error, info) {
    console.log(error)
  }

  render() {
    if (this.state.hasErrored) {
      return (
        <ErrorImageOverlay>
          <ErrorImageContainer imageUrl='./dog.png' />
          <ErrorImageText>
            Sorry, this page appears to be broken. Maybe the dog ate the page.
            </ErrorImageText>
        </ErrorImageOverlay>
      )
    }
    return this.props.children
  }
}

export default ErrorBoundary