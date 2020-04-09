import React from "react"
import { Link } from "gatsby"
import styles from "./nav.module.css"


function nav_bar (props) {
  return (
    <nav className={styles.wrapper}>
      <div className={styles.logo_box}>
        <Link to={"./"}>
        <img alt={"Jacob Keisling's very own logo"} src={'https://www.keisling.me/ki.svg'} />
        </Link>
        <p>Jacob <br/> Keisling</p>
      </div>
      <div className={styles.breadcrumbs}>
        <p><a href={"http://www.google.com"}>Home</a></p>
      </div>
    </nav>
  )
}

export default nav_bar
