import React from "react"
import styles from "./article_meta.module.css"

function meta (props) {
  return (
    <div className={styles.wrapper}>
      <h1>Meta</h1>
      <div className={styles.body}>
        <div className={styles.tag_box}>
          <h3>Tagged: {props.tags}</h3>
        </div>
        <div className={styles.num_box}>
          <h3>{`${props.word_count} words / ${props.pub_date}`}</h3>
        </div>
      </div>
    </div>
  )
}

export default meta;
