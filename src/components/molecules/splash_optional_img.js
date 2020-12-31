import React from 'react'
import styles from './splash_optional_img.module.css'

const SplashOptionalImg = (props) => (
    <div 
        className={styles.wrapper}
        style={{ backgroundImage: `${props.imageLoc}`}}
    >
            {props.children}
    </div>
)

export default SplashOptionalImg