import React from 'react';
import Helmet from 'react-helmet'
import config from '../utils/siteConfig'
import favicon from '../../static/favicon.ico'

export default () => (
  <Helmet>
   <html lang="en-US" />
   <title>{config.siteTitle}</title>
    <meta name="description" content={config.siteDescription} />
    <link rel="icon" href={favicon} />
  </Helmet>
)
