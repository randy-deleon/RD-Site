const config = require('./src/utils/siteConfig');

let contentfulConfig;

try {
	contentfulConfig = require('./.contentful');
} catch (_) {
	contentfulConfig = {
		spaceId: process.env.CONTENTFUL_SPACE_ID,
		accessToken: process.env.CONTENTFUL_DELIVERY_TOKEN
	};
} finally {
	const { spaceId, accessToken } = contentfulConfig;

	if (!spaceId || !accessToken) {
		throw new Error('Contentful spaceId and the delivery token need to be provided.');
	}
}

module.exports = {
	siteMetadata: {
		title: config.siteTitle,
		siteUrl: config.siteUrl,
		description: config.siteDescription,
		rssMetadata: {
			site_url: `${config.siteUrl}/blog`,
			feed_url: `${config.siteUrl}/rss.xml`,
			title: config.siteTitle,
			description: config.siteDescription,
			image_url: `${config.siteUrl}${config.siteLogo}`,
			author: config.author,
			copyright: config.copyright
		}
	},
	plugins: [
		`gatsby-transformer-remark`,
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		`gatsby-plugin-styled-components`,
		'gatsby-plugin-react-helmet',
		{
			resolve: 'gatsby-source-contentful',
			options: contentfulConfig
		},
		{
			resolve: `gatsby-transformer-remark`,
			options: {
				plugins: [ 'gatsby-remark-emoji' ]
			}
		},
		{
			resolve: `gatsby-plugin-canonical-urls`,
			options: {
				siteUrl: config.siteUrl
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
				resolveEnv: () => process.env.NETLIFY_ENV,
				env: {
					production: {
						policy: [
							{
								userAgent: '*'
							}
						],
						host: config.siteUrl,
						sitemap: `${config.siteUrl}/sitemap.xml`
					},
					'branch-deploy': {
						policy: [
							{
								userAgent: '*',
								disallow: [ '/' ]
							}
						],
						sitemap: null,
						host: null
					},
					'deploy-preview': {
						policy: [
							{
								userAgent: '*',
								disallow: [ '/' ]
							}
						],
						sitemap: null,
						host: null
					}
				}
			}
		},
		{
			resolve: 'gatsby-plugin-feed',
			options: {
				query: `
				{
					site {
						siteMetadata {
							rssMetadata {
							site_url
							feed_url
							title
							description
							image_url
							author
							copyright
							}
						}
					}
				}
				`,
				feeds: [
					{
						serialize(ctx) {
							const rssMetadata = ctx.query.site.siteMetadata.rssMetadata;
							return ctx.query.allContentfulBlogPost.edges.map((edge) => ({
								date: edge.node.publishDate,
								title: edge.node.title,
								description: edge.node.body.childMarkdownRemark.excerpt,
								url: rssMetadata.site_url + '/' + edge.node.slug,
								guid: rssMetadata.site_url + '/' + edge.node.slug,
								custom_elements: [
									{
										'content:encoded': edge.node.body.childMarkdownRemark.html
									}
								]
							}));
						},
						query: `
					{
					allContentfulBlogPost(limit: 1000, sort: {fields: [publishDate], order: DESC}) {
					 edges {
					   node {
						 title
						 slug
						 publishDate(formatString: "MMMM DD, YYYY")
						 body {
						   childMarkdownRemark {
							 html
							 excerpt(pruneLength: 80)
						   }
						 }
					   }
					 }
				   }
				 }
				`,
						output: '/rss.xml'
					}
				]
			}
		},
		`gatsby-plugin-offline`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: config.siteTitle,
				short_name: config.shortName,
				start_url: '/',
				scope: '/',
				background_color: config.backgroundColor,
				theme_color: config.themeColor,
				display: 'standalone',
				orientation: 'portrait',
				icon: `static${config.siteLogo}`,
				icons: [
					{
						src: `/images/icons/icon-48x48.png`,
						sizes: `48x48`,
						type: `image/png`
					},
					{
						src: `/images/icons/icon-72x72.png`,
						sizes: `72x72`,
						type: `image/png`
					},
					{
						src: `/images/icons/icon-96x96.png`,
						sizes: `96x96`,
						type: `image/png`
					},
					{
						src: `/images/icons/icon-144x144.png`,
						sizes: `144x144`,
						type: `image/png`
					},
					{
						src: `/images/icons/icon-192x192.png`,
						sizes: `192x192`,
						type: `image/png`
					},
					{
						src: `/images/icons/icon-256x256.png`,
						sizes: `256x256`,
						type: `image/png`
					},
					{
						src: `/images/icons/icon-384x384.png`,
						sizes: `384x384`,
						type: `image/png`
					},
					{
						src: `/images/icons/icon-512x512.png`,
						sizes: `512x512`,
						type: `image/png`
					}
				]
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
			resolve: 'gatsby-plugin-sri',
			options: {
				hash: 'sha512'
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
					// "X-Xss-Protection: 1; mode=block", //implicitly enabled by the plugin
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
