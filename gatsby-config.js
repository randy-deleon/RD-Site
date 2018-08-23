let contentfulConfig;

try {
	// @ts-ignore
	contentfulConfig = require('./.contentful');
} catch (_) {
	contentfulConfig = {
		spaceId: process.env.CONTENTFUL_SPACE_ID,
		accessToken: process.env.CONTENTFUL_DELIVERY_TOKEN
	};
} finally {
	const {
		spaceId,
		accessToken
	} = contentfulConfig;

	if (!spaceId || !accessToken) {
		throw new Error('Contentful spaceId and the delivery token need to be provided.');
	}
}

module.exports = {
	pathPrefix: '/blog',
	siteMetadata: {
		siteUrl: `https://randydeleon.com`
	},
	plugins: [
		`gatsby-transformer-sharp`,
		`gatsby-transformer-remark`,
		`gatsby-plugin-styled-components`,
		`gatsby-plugin-sharp`,
		`gatsby-plugin-offline`,
		'gatsby-plugin-react-helmet',
		{
			resolve: 'gatsby-source-contentful',
			options: contentfulConfig
		},
		{
			resolve: `gatsby-transformer-remark`,
			options: {
				plugins: ['gatsby-remark-emoji']
			}
		},
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: 'Randy De Leon',
				short_name: 'RD',
				start_url: '/',
				scope: '/',
				background_color: '#F5F5F4',
				theme_color: '#e54b4b',
				display: 'standalone',
				orientation: 'portrait',
				icon: 'src/images/icon.png' // This path is relative to the root of the site.
			}
		},
		{
			resolve: `gatsby-plugin-sitemap`,
			options: {
				output: `/sitemap.xml`,
				query: `
          {
            site {
              siteMetadata {
                siteUrl
              }
            }
            allSitePage {
              edges {
                node {
                  path
                }
              }
            }
        }`
			}
		},
		{
			resolve: 'gatsby-plugin-robots-txt',
			options: {
				host: 'https://randydeleon.com',
				sitemap: 'https://randydeleon.com/sitemap.xml',
				policy: [{
					userAgent: '*',
					allow: '/'
				}]
			}
		},
		{
			resolve: `gatsby-plugin-google-analytics`,
			options: {
				trackingId: process.env.GOOGLE_ANALYTICS,
				head: true,
				anonymize: true,
				respectDNT: true
				// exclude: ['/blog/**']
			}
		},
		{
			resolve: 'gatsby-plugin-sentry',
			options: {
				dsn: process.env.SENTRY_DSN,
				config: {
					environment: 'production'
				}
			}
		},
		{
			resolve: `gatsby-plugin-netlify`,
			options: {
				headers: {},
				allPageHeaders: [
					`Cache-Control: public, max-age=360000`,
					`Content-Security-Policy: frame-src 'self';`,
					`Content-Security-Policy-Report-Only: report-uri ${process.env.SENTRY_SECURITY_HEADERS}`,
					`Expect-CT: enforce,max-age=604800,report-uri="${process.env.SENTRY_SECURITY_HEADERS}"`,
					`Feature-Policy: sync-xhr 'none'; microphone 'none'; magnetometer 'none'; gyroscope 'none'; speaker 'none'; payment 'none'; camera 'none';`,
					`Strict-Transport-Security: max-age=31536000; includeSubDomains; preload`,
					`Referrer-Policy: same-origin`,
					`X-Frame-Options: DENY`,
					`X-Content-Type-Options: nosniff`
					// "X-Xss-Protection: 1; mode=block", //enabled by the plugin
				],
				mergeSecurityHeaders: true,
				mergeLinkHeaders: true,
				mergeCachingHeaders: true,
				transformHeaders: (headers, path) => headers,
				generateMatchPathRewrites: true
			}
		}
	]
};