import React from "react"
import styles from "./gallery.module.css"

function gallery (props) {
	return (
	<div className={styles.wrapper}>
		<hr />
		<h1>{props.title}</h1>	
		<div className={styles.items}>
			{props.children}
		</div>
	</div>
	)
}

export default gallery
