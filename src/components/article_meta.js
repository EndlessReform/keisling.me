import React from "react"
import styles from "./article_meta.module.css"

function meta (props) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.tag_box}>
        <h3>{props.tags}</h3>
      </div>
      <div className={styles.num_box}>
        <h3>{`${props.word_count} words / ${props.pub_date}`}</h3>
      </div>
    </div>
  )
}

export default meta;
