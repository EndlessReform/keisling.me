import React from "react"
import { Link, graphql} from "gatsby"
import { Helmet } from "react-helmet"

import styles from "./index.module.css"

import Navbar from "../components/nav_dark.js"
// import Gallery from "../components/gallery.js"
import Footer from "../components/footer.js"

/*
export default () => (
  <div className={styles.wrapper}>
    <h1 className={styles.test_property}>Hello Gatsby!</h1>
    <h2>Does this even work?</h2>
  </div>
)
*/

class example extends React.Component {
  render () {
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
        <Navbar></Navbar>
        <div className={styles.para}>
          <h1 className={styles.welcome_text}>Hi! I'm <a href={'https://www.github.com/endlessreform'} className={styles.redAccent}>Jacob Keisling,</a> <br />and this is my website.</h1>
        </div>
        <div id={'writing'} className={styles.cat}>
          <h1>Writing</h1>
          <div className={styles.listLarge}>
            <a className={styles.titleStress}>Something is wrong with modern computers</a>
            <div className={styles.titleMeta}>
              <p className={styles.date}>2020-06-28</p>
            </div>
          </div>
          <div className={styles.listLarge}>
            <a className={styles.titleStress}>Why progress has stopped</a>
            <div className={styles.titleMeta}>
              <p className={styles.date}>2020-06-28</p>
            </div>
          </div>
          <div className={styles.listLarge}>
            <a className={styles.titleStress}>Why everyone should have their own blog</a>
            <div className={styles.titleMeta}>
              <p className={styles.date}>2020-06-28</p>
            </div>
          </div>
          <h3><a href={'https://www.keisling.me/writing/'}>2 more essays 🡪</a></h3>
        </div>
        <div id={'reading'} className={styles.cat}>
          <h1>Reading</h1>
          <div className={styles.listLarge}>
            <a className={styles.titleStress}>The Road to Somewhere</a>
            <p className={styles.titleAdditional}>David Goodwin</p>
            <div className={styles.titleMeta}>
              <p className={styles.date}>2020-06-28</p>
            </div>
          </div>
          <h3><a href={'https://www.keisling.me/reading/'}>5 more books 🡪</a></h3>
        </div>
        <div className={styles.cat}>
          <h1>Blogroll</h1>
          <div className={styles.threeWrapper}>
            <div className={styles.threeBody}>
              <h2>Art and Design</h2>
              <ul>
                <li>
                  <a href={''}>Typewolf</a>
                  <p>🡪</p>
                </li>
                <li>
                  <a href={''}>httpref</a>
                  <p>🡪</p>
                </li>
                <li>
                  <a href={''}>Font Review Journal</a>
                  <p>🡪</p>
                </li>
              </ul>
            </div>
            <div className={styles.threeBody}>
              <h2>Tech</h2>
              <ul>
                <li>
                  <a href={''}>MacStories</a>
                  <p>🡪</p>
                </li>
                <li>
                  <a href={''}>Stratechery</a>
                  <p>🡪</p>
                </li>
              </ul>
            </div>
            <div className={styles.threeBody}>
              <h2>Misc</h2>
              <ul>
                <li>
                  <a href={''}>Agenty Duck</a>
                  <p>🡪</p>
                </li>
                <li>
                  <a href={''}>Marginal Revolution</a>
                  <p>🡪</p>
                </li>
                <li>
                  <a href={''}>Scholar's Stage</a>
                  <p>🡪</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
				<Footer />
      </div>
    )
  }
}
export default example;

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