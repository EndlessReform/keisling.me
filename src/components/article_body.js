import React from "react"
import styles from "./article_body.module.css"

function Body (props) {
  return (
    <div className={styles.wrapper}>
      {props.children}
    </div>
  )
}

export default Body
