import React from "react"
import styles from "./nav_dark.module.css"


function nav_bar (props) {
  return (
    <nav className={styles.wrapper}>
      <div className={styles.logo_box}>
        <a href={"https://www.keisling.me"}>
        <img alt={"Jacob Keisling's very own logo"} src={'ki_black.svg'} />
        </a>
        <p>Jacob <br/> Keisling</p>
      </div>
      <div className={styles.breadcrumbs}>
        <p><a href={"http://www.google.com"}>Home</a></p>
      </div>
    </nav>
  )
}

export default nav_bar
