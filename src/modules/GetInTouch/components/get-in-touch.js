import React from 'react'
import styles from './get-in-touch.jss.js'
import text from './text'

const  GetInTouch = ((props) => {
    return (
    <div id={'contact'} style={styles.getInTouch[props.screenSize]}>
        <div style={styles.header}>
            {text.HEADER}
        </div>
        <div style={styles.subHeader}>
            {text.SUB_HEADER}
        </div>
        <div style={styles.contact}>
            {text.EMAIL}
        </div>
    </div>
    )
})

export default GetInTouch
  