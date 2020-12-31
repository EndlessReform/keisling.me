import React from 'react'
import styles from './link_with_shadow.module.css'

const LinkWithShadow = (props) => (
    <a 
        className={styles.link_with_shadow}
        href={props.to}
    >{props.text}</a>
)

export default LinkWithShadow