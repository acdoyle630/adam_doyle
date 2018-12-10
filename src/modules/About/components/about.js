import React from 'react'
import style from '../styles/about.jss'
import text from '../text/text'
import profilePicture from '../../../images/Adam_Doyle_img.jpg'

const  About = ((props) => {
    return (
        <div id={'about'} style={style.about}>
            <div style={style.aboutHeader}>
                {text.aboutHeader}
            </div>
            <div style={style.aboutContent[props.screenSize]}>
                <div style={style.aboutWords}>
                    <div style={style.aboutText}>
                        {text.aboutText}
                    </div>
                    <div style={style.skills}>
                        <div style={style.skillsColumn}>
                            <li>JavaScript</li>
                            <li>React</li>
                        </div>
                        <div style={style.skillsColumn}>
                            <li>HTML</li>
                            <li>CSS</li>
                        </div>
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
  