import React from "react"
import styles from "./footer.module.css"

import logo from "../assets/images/logo_circle_grey.svg"

export default ({ data }) => (
	<div className={styles.wrapper}>
		<hr className={styles.top} />
		<div className={styles.icons}>
			<img src={logo} alt={"logo"} />
				<a href="https://www.keisling.me/writing">Writing</a>
				<a href="https://www.keisling.me/reading">Reading</a>
				<a href="https://www.notion.so/keisling/Memex-4399b56a55a74c4f9d266dc364bc2114">Memex</a>
				<a href="https://www.keisling.me/about/me">Me</a>
				<a href="https://www.keisling.me/about/site">Colophon</a>
			<p>© Jacob Keisling 2020</p>
		</div>
	</div>
)
