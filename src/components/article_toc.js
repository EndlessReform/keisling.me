import React from "react"
import styles from "./article_toc.module.css"

function toc (props) {
  return (
    <div className={styles.wrapper}>
      <h2>Contents </h2>
      <ol>
        {props.children}
      </ol>
    </div>
  )
}

export default toc;
