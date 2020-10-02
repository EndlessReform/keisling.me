import React from "react"
import { Link, graphql } from "gatsby"
import { Helmet } from "react-helmet"

import styles from "./styles/essays.module.css"

import Navbar from "../components/nav_dark.js"
import Footer from "../components/footer.js"

function Essay (props) {
  return (
  <div className={styles.essay_wrapper}>
    <Helmet>
      <title>Jacob | Essays</title>
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#ffffff" />


    </Helmet>
    <div className={styles.preview}>
      <Link to={props.dest}><h1>{props.title}</h1></Link>
      <h2>{props.subtitle}</h2>
    </div>
    <div className={styles.metadata}>
      <p>{props.tags}</p>
      <p>{props.date}</p>
    </div>
  </div>
  )
}

function main ({data}) {
  return (
    <div className={styles.wrapper}>
      <Navbar logo_color={"green"}></Navbar>
      <h1 className={styles.title}>Writing</h1>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <Essay 
          key={node.id}
          dest={node.fields.slug}
          title={node.frontmatter.title}
          subtitle={node.frontmatter.subtitle}
          tags={node.frontmatter.tags}
          date={node.frontmatter.date}
        ></Essay>
       ))
      }
      <div style={{'margin-top': '6rem'}}>
        <Footer />
      </div>
    </div>
  )
}

export default main

export const query = graphql`
  query {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            subtitle
            tags
            date(formatString: "YYYY-DD-MM")
          }
          excerpt
        }
      }
    }
  }
`
