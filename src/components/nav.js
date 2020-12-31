import React from "react"
import { Link } from "gatsby"
import styles from "./nav.module.css"

import logo from "../assets/logo/logo_circle_black.svg" 

function nav_bar (props) {
  return (
    <nav className={styles.wrapper}>
      <div className={styles.logo_box}>
        <Link to={"./"}>
        <img alt={"Jacob Keisling's very own logo"} src={logo}/>
        </Link>
      </div>
      <div className={styles.breadcrumbs}>
        <p><a href={"http://www.google.com"}>Home</a></p>
      </div>
    </nav>
  )
}

export default nav_bar
