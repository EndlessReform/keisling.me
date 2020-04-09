import React from "react"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"

import styles from "./index.module.css"

import Navbar from "../components/nav.js"

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
          <h1 className={styles.welcome_text}>Hi! I'm <a href={'https://www.google.com'} className={styles.redAccent}>Jacob Lowell Keisling</a>, and this is my website.</h1>
          <hr className={styles.welcome_divider}/>
          <h1 className={styles.welcome_text}>It's still in progress, but you can check out my <Link to={'./essays'} className={styles.greenAccent}>essays</Link> here.</h1>
        </div>
      </div>
    )
  }
}
export default example;
