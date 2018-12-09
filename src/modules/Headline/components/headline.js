import React from 'react'
import style from '../styles/headline.jss'
import text from '../text/text.js'

const  Headline = (() => {

    return (
    <div style={style.headline}>
        <div style={style.intro}>
            {text.intro}
        </div>
        <div style={style.myNameIs}>
            {text.myNameIs}
        </div>
        <div style={style.wat}>
            {text.wat}
        </div>
        <div style={style.details}>
            {text.details}
        </div>
        <div style={style.contact}>
            {text.contact}
        </div>
    </div>
    )
})

export default Headline
  