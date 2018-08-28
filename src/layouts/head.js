import React from 'react';
import Helmet from 'react-helmet'
import config from '../utils/siteConfig'
import favicon from '../images/favicon.ico'

export default () => (
  <Helmet>
   <html lang="en-US" />
    <meta charSet="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>{config.siteTitle}</title>
    <meta name="description" content={config.siteDescription} />
    <link rel="icon" href={favicon} />
  </Helmet>
)
