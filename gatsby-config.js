/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  pathPrefix: `/mitech`,
  siteMetadata: {
    title: "React Gatsby Technology & Blog Template",
    titleTemplate: `Mitech`,
    description: `Mitech is a Powerful & flexible Technology And Digital Software Gatsby Template. 06 Stunning Homepages are included in this template. You can use any template or mix content from different home pages for your website.`,
    author: `@HasThemes`,
    twitterUsername: `@HasThemes`,
    image: 'landing.png',
    siteUrl: 'https://mitech.gatsbydemo.hasthemes.com/',
    canonical: "https://mitech.gatsbydemo.hasthemes.com/",
    getform: "https://getform.io/f/22b43bd4-29a7-4795-ba95-6abfe8bf1f39",
    copyright: "Mitech. <a href='https://hasthemes.com/' target='_blank' rel='noopener noreferrer'>All Rights Reserved.</a>",
    siteLanguage: "en",
    social: {
      facebook: "https://www.facebook.com",
      twitter: "https://www.twitter.com",
      instagram: "https://www.instagram.com",
      linkedin: "https://www.linkedin.com"
    },
    contact: {
      phone: '190068668',
      address: "58 Howard Street #2 San Francisco, CA 941",
      email: 'hello@mitech.com',
      website: "https://hasthemes.com/",
      rating: "4.9",
      customers: "700",
      clients: "3200",
      addressInfos: [
        {
          "id": "san-francisco",
          "state": "San Francisco",
          "address": "58 Howard Street #2 San Francisco, CA 941",
          "email": "contact.sanfrancisco@mitech.com",
          "phone": "(+68)1221 09876"
        },
        {
          "id": "new-york",
          "state": "New York",
          "address": "58 Howard Street #14 New York",
          "email": "contact.newyork@mitech.com",
          "phone": "(+68)1221 09878"
        },
        {
          "id": "russia",
          "state": "Russia",
          "address": "The Courtyard Building 11 Curtain Road, Russia",
          "email": "contact.russia@mitech.com",
          "phone": "(+68)1221 09877"
        }
      ]
    }
  },
  mapping: {
    "MarkdownRemark.frontmatter.author": `AuthorsJson.name`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-json`,
    `gatsby-plugin-styled-components`,
   
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        "excerpt_separator": `<!-- endexcerpt -->`,
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `fonts`,
        path: `${__dirname}/src/assets/fonts`,
        ignore: [`**/\.*`]
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
        ignore: [`**/\.*`]
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data`,
        ignore: [`**/\.*`]
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        "name": "Mitech",
        "short_name": "mitech",
        "theme_color": "#086ad8",
        "background_color": "#ffffff",
        "display": "standalone",
        "scope": "/",
        "start_url": "/",
        "icon": "src/assets/images/favicon.png",
        "icons": [
          {
            "src": "/icons/icon-72x72.png",
            "sizes": "72x72",
            "type": "image/png"
          },
          {
            "src": "/icons/icon-96x96.png",
            "sizes": "96x96",
            "type": "image/png"
          },
          {
            "src": "/icons/icon-128x128.png",
            "sizes": "128x128",
            "type": "image/png"
          },
          {
            "src": "/icons/icon-144x144.png",
            "sizes": "144x144",
            "type": "image/png"
          },
          {
            "src": "/icons/icon-152x152.png",
            "sizes": "152x152",
            "type": "image/png"
          },
          {
            "src": "/icons/icon-192x192.png",
            "sizes": "192x192",
            "type": "image/png"
          },
          {
            "src": "/icons/icon-384x384.png",
            "sizes": "384x384",
            "type": "image/png"
          },
          {
            "src": "/icons/icon-512x512.png",
            "sizes": "512x512",
            "type": "image/png"
          }
        ],
      },
    },
    {
      resolve: `gatsby-plugin-breadcrumb`,
      options: {
        useAutoGen: true,
        autoGenHomeLabel: `Home`,
        exclude: [
          `/dev-404-page`,
          `/404`,
          `/404.html`,
        ],
        useClassNames: true
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://mitech.gatsbydemo.hasthemes.com/',
        sitemap: 'https://mitech.gatsbydemo.hasthemes.com/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }]
      }
    }
  ],
}
