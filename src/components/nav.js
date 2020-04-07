import React from "react"
import styles from "./nav.module.css"


function nav_bar (props) {
  return (
    <nav>
      <div className={styles.logo_box}>
        <img alt={"Jacob Keisling's very own logo"} src={'ki.svg'} />
        <p>Jacob <br/> Keisling</p>
      </div>
      <div className={styles.breadcrumbs}>
        <p><a href={"http://www.google.com"}>Home</a></p>
      </div>
    </nav>
  )
}

export default nav_bar
