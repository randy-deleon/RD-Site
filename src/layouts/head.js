import React from 'react';
import Helmet from 'react-helmet'
import config from '../utils/siteConfig'
import favicon from '../../static/favicon.ico'

export default () => (
  <Helmet>
   <html lang="en-US" />
   <title>{config.siteTitle}</title>
    <meta name="description" content={config.siteDescription} />
    <link rel="apple-touch-icon" sizes="180x180" href={config.appleIcon180x180}/>
    <link rel="icon" href={favicon} />
    <link rel="icon" type="image/png" sizes="32x32" href={config.icon32x32}/>
    <link rel="icon" type="image/png" sizes="16x16" href={config.icon16x16}/>
  </Helmet>
)
