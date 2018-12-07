import React from 'react'
import style from '../styles/about.jss'
import text from '../text/text'
import profilePicture from '../../../images/Adam_Doyle_img.jpg'

const  About = (() => {

    return (
        <div style={style.about}>
            <div>
                {text.aboutHeader}
            </div>
            <div style={style.aboutContent}>
                <div>
                    {text.aboutText}
                </div>
                <img src={profilePicture} alt='Adam Doyle' />
            </div>
        </div>

    )
})

export default About
  