import React from 'react'
import style from '../styles/about.jss'
import text from '../text/text'
import profilePicture from '../../../images/Adam_Doyle_img.jpg'

const  About = ((props) => {
    return (
        <div style={style.about}>
            <div style={style.aboutHeader}>
                {text.aboutHeader}
            </div>
            <div style={style.aboutContent[props.screenSize]}>
                <div style={style.aboutWords}>
                    <div style={style.aboutText}>
                        {text.aboutText}
                    </div>
                    <div style={style.skills}>
                        <ul>
                            <li>JavaScript</li>
                            <li>React</li>
                        </ul>
                        <ul>
                            <li>HTML</li>
                            <li>CSS</li>
                        </ul>
                    </div>
                </div>
                <img
                    style={style.profilePicture}
                    src={profilePicture}
                    alt='Adam Doyle' />
            </div>
        </div>
    )
})

export default About
  