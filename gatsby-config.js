module.exports = {
  siteMetadata: {
    title: `Jacob Keisling`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
      resolve: `gatsby-plugin-emotion`,
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-sharp`, 
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-postcss`
  ],
}
