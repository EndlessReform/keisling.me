import React from "react"
import styles from "./article_title.module.css"

function title (props) {
  return (
    <div className={styles.wrapper}>
      <h1>{props.headline}</h1>
      <h2>{props.subheadline}</h2>
    </div>
  )
}

export default title
