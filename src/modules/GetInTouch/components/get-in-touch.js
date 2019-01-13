import React from 'react'
import styles from './get-in-touch.jss.js'
import text from './text'

const  GetInTouch = ((props) => {
    console.log(text)
    console.log(props)

    return (
    <div style={styles.getInTouch[props.screenSize]}>
        <div style={styles.header}>
            {text.HEADER}
        </div>
        <div style={styles.subHeader}>
            {text.SUB_HEADER}
        </div>
        <div style={styles.contact}>
            {text.PHONE}
        </div>
        <div style={styles.contact}>
            {text.EMAIL}
        </div>
    </div>
    )
})

export default GetInTouch
  