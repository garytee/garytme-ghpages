const { TITLE, AUTHOR, SITE_URL } = require('./src/constants');

const siteMetadata = {
  title: TITLE,
  author: AUTHOR,
  homepage: SITE_URL,
  siteUrl: SITE_URL,
};

module.exports = {
  siteMetadata,
  pathPrefix: '/',
  plugins: [
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
          resolve: `gatsby-remark-relative-images`,
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1000,
              withWebp: true
            },
          },
          'gatsby-remark-images-modal',
          {
            resolve: 'gatsby-remark-responsive-iframe',
            options: {
              wrapperStyle: 'margin-bottom: 1.0725rem',
            },
          },
          {
            resolve: 'gatsby-remark-prismjs',
            options: {
              classPrefix: 'hljs-',
            },
          },
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
        ],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/resources`,
        name: 'resources',
      },
    },
    {
     resolve: `gatsby-plugin-typography`,
     options: {
      pathToConfigModule: `${__dirname}/src/utils/typography`,
     },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: '<<YOUR_OWN_KEY>>',
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-ngrok-tunneling',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Gatsby Advanced Blog',
        short_name: 'Gatsby Blog',
        start_url: '/',
        background_color: '#fff',
        theme_color: '#3B9CFF',
        display: 'minimal-ui',
        icon: `src/resources/favicon.png`, // This path is relative to the root of the site.
        icons: [{
          // Everything in /static will be copied to an equivalent
          // directory in /public during development and build, so
          // assuming your favicons are in /static/favicons,
          // you can reference them here
          src: `/favicons/favicon-192x192.png`,
          sizes: `192x192`,
          type: `image/png`,
        }, {
          src: `/favicons/favicon-512x512.png`,
          sizes: `512x512`,
          type: `image/png`,
        }],
        
      },
    },
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: SITE_URL,
        sitemap: `${SITE_URL}/sitemap.xml`,
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },
  ],
};
