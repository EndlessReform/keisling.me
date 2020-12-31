import React from "react"
import { Link } from "gatsby"
import styles from "./nav_dark.module.css"

import logo_black from "../assets/logo/logo_circle_black.svg"
import logo_white from "../assets/logo/logo_circle_white.svg"
import logo_pink  from "../assets/logo/logo_circle_pink.svg"
import logo_green from "../assets/logo/logo_circle_green.svg"

function nav_bar (props) {
	let logo = null;
	switch (props.logo_color) {
		case "green":
			logo = logo_green;
			break;
		case "white":
			logo = logo_white;
			break;
		case "black":
			logo = logo_black;
			break;
		case "pink":
			logo = logo_pink;
			break;
		default:
			logo = logo_black;
			break;
	}
  return (
    <nav className={styles.wrapper}>
      <div className={styles.logo_box}>
        <a href={"https://www.keisling.me"}>
        <img alt={"Jacob Keisling's very own logo"} src={logo}/>
        </a>
      </div>
      <div className={styles.breadcrumbs}>
        <Link style={{color: "#377765",}} to={"/writing"}>Writing</Link>
        <Link style={{color: "#F49B7F",}} to={"/reading"}>Reading</Link>
      </div>
    </nav>
  )
}

export default nav_bar
