require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Cezar Sampaio - Photography`,
    titleTemplate: "%s · Cezar Sampaio - Photography",
    description: `I’m Cezar, a passionated photographer based in Berlin, Germany. I’m inspired by these three pricinples: connection, emotion and sensitivity.`,
    author: `@cezarsmpio`,
    twitterUsername: `@cezarsmpio`,
    image: `/assets/images/icon.png`,
    url: `https://cezarsampaio.com`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static/assets/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Cezar Sampaio`,
        short_name: `Cezar Sampaio`,
        start_url: `/`,
        background_color: `#090909`,
        theme_color: `#090909`,
        display: `minimal-ui`,
        icon: `static/assets/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_API_KEY,
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          "G-8EWNBDRBQL", // Google Analytics / GA
        ],
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: false,
        },
      },
    },
  ],
}
