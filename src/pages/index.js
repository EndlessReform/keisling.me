import React from "react"
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
        <Navbar></Navbar>
        <div className={styles.para}>
          <h1 className={styles.welcome_text}>Hi! I'm <a href={'https://www.google.com'} className={styles.redAccent}>Jacob Lowell Keisling</a>, and this is my website.</h1>
          <hr className={styles.welcome_divider}/>
          <h1 className={styles.welcome_text}>It's still in progress, but you can check out my <a href={'https://www.google.com'} className={styles.greenAccent}>essays</a> here.</h1>
        </div>
      </div>
    )
  }
}
export default example;
