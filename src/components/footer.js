import React from "react"
import { Link } from "gatsby"

import styles from "./footer.module.css"

import logo from "../assets/logo/logo_circle_grey.svg"

export default ({ data }) => (
	<div className={styles.wrapper}>
		<hr className={styles.top} />
		<div className={styles.icons}>
			<img src={logo} alt={"logo"} />
				<Link to="/writing">Writing</Link>
				<Link to="/reading">Reading</Link>
				<Link to="/about/me">Me</Link>
				<Link to="/about/colophon">Colophon</Link>
			<p>© Jacob Keisling</p>
		</div>
	</div>
)
