import React from "react"
import { graphql, Link } from "gatsby"
import { Helmet } from "react-helmet"

import styles from "./index.module.css"

// Atoms
import DividerSoft from '../components/atoms/divider_soft'
import LinkWithShadow from '../components/atoms/link_with_shadow'
// Molecules
import SplashOptionalImg from '../components/molecules/splash_optional_img'
import ListSideTitle from '../components/molecules/list_side_title'
// Organisms
import Navbar from "../components/nav_dark.js"
import Footer from "../components/footer.js"
// import Gallery from "../components/gallery.js"

// Assets

function Page (props) {
    return (
      <div className={styles.wrapper}>
        <Helmet>
          <title>Jacob | Home</title>
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
          <meta name="msapplication-TileColor" content="#da532c" />
        </Helmet>
        <Navbar />
        <SplashOptionalImg
          alt='My logo'
        >
          <div style={{paddingTop: "6rem"}}>
          <h1 className={styles.fold_header}>Hi! I'm Jacob Keisling.</h1>
          <h2 className={styles.fold_sub}>I'm a UChicago student <br /> looking for new challenges.</h2>
          <LinkWithShadow 
            to='https://raw.githubusercontent.com/EndlessReform/resume/main/Jacob%20Keisling%20Resume%20Autumn%202020.pdf'
            text="Check out my resume"
          />
          </div>
        </SplashOptionalImg>
        <DividerSoft />
        <ListSideTitle
          title='Writing'
          titleColor='#377765'
          more='/writing'
        >
          {props.data.allMarkdownRemark.edges.map(({node}) => (
            <li><Link to={node.fields.slug}>{node.frontmatter.title}</Link></li>
          ))}
        </ListSideTitle>
				<Footer />
      </div>
    )
}
export default Page;

export const query_writing = graphql`
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