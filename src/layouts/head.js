import React from 'react';
import Helmet from 'react-helmet'
import config from '../utils/siteConfig'
import favicon from '../../static/favicon.ico'
import appleIcon from '../../static/images/icons/apple-touch-icon.png'

export default () => (
  <Helmet>
   <html lang="en-US" />
   <title>{config.siteTitle}</title>
    <meta name="description" content={config.siteDescription} />
    <link rel="apple-touch-icon" sizes="180x180" href={appleIcon}/>
    <link rel="icon" href={favicon} />
    <meta name="msapplication-TileColor" content="#e54b4b"></meta>
  </Helmet>
)
