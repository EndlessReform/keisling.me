import React from 'react'
import styles from './button.module.css'

const Button = (props) => (
    <input
        type = 'button'
    >{props.text}</input>
)

export default Button
