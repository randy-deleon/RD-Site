import React from 'react';
import Helmet from 'react-helmet'
import Raven from 'raven-js'
import favicon from '../images/favicon.ico'

export default () => (
  <Helmet>
   <html lang="en-US" />
    <meta charSet="utf-8" />
    <meta name="description" content="Randy De Leon's (RD), personal online portfolio and blog to help fellow developers build awesome stuff for the web. "/>
    <link rel="canonical" href="https://randydeleon.com/"/>
    <link rel="icon" href={favicon} />
    { process.env.NODE_ENV === 'production' ? Raven.config(`https://069eb3a55db741da8e44e285551621f4@sentry.io/1266601`).install(): null }

  </Helmet>
)
