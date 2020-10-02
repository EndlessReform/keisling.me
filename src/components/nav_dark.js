import React from "react"
import styles from "./nav_dark.module.css"

import logo_black from "../assets/images/logo_circle_black.svg"
import logo_white from "../assets/images/logo_circle_white.svg"
import logo_pink  from "../assets/images/logo_circle_pink.svg"
import logo_green from "../assets/images/logo_circle_green.svg"

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
        <p>Jacob <br/> Keisling</p>
      </div>
      <div className={styles.breadcrumbs}>
        <a style={{color: "#377765",}} href={"http://www.keisling.me/writing"}>Writing</a>
        <a style={{color: "#F49B7F",}} href={"http://www.keisling.me/reading"}>Reading</a>
        <a style={{color: "#1d64cc",}} href={"https://www.notion.so/keisling/Memex-4399b56a55a74c4f9d266dc364bc2114"}>Memex</a>
        <a style={{color: "#75787a",}} href={"http://www.google.com"}>Menu</a>
      </div>
    </nav>
  )
}

export default nav_bar
