import React from 'react'
import { Link } from 'gatsby'
import styles from './list_side_title.module.css'

function ListSideTitle (props) {
    return(
    <div className={styles.wrapper}>
        <div className={styles.meta}>
            <h1 
                className={styles.title}
                style={{
                    color: `${props.titleColor ? props.titleColor : "#231f20"}`
                }}
            >{props.title}</h1>
        </div>
        <div className={styles.list}>
            <ul>
                {props.children}
            </ul>
            <Link 
                className={styles.more}
                to={props.more}
            >More</Link>
        </div>
    </div>
    )
}

export default ListSideTitle