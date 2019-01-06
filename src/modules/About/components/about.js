import React from 'react'
import style from '../styles/about.jss'
import text from '../text/text'
import profilePicture from '../../../images/Adam_Doyle_img.jpg'

const  About = ((props) => {
    return (
        <div id={'about'} style={style.about[props.screenSize]}>
            <div style={style.aboutHeader}>
                {text.aboutHeader}
            </div>
            <div style={style.aboutContent[props.screenSize]}>
                <div style={style.aboutWords}>
                    <div style={style.aboutText}>
                        {text.aboutText}
                    </div>
                    <div style={style.skillsHeader}>
                        {text.skillsHeader}
                    </div>
                    <div style={style.skills}>
                        <div style={style.skillsColumn}>
                            <div style={style.individualSkill}>JavaScript</div>
                            <div style={style.individualSkill}>HTML & CSS</div>
                            <div style={style.individualSkill}>React & Redux</div>
                        </div>
                        <div style={style.skillsColumn}>
                            <div style={style.individualSkill}>Node</div>
                            <div style={style.individualSkill}>MongoDB</div>
                            <div style={style.individualSkill}>Express</div>
                        </div>
                        <div style={style.skillsColumn}>
                            <div style={style.individualSkill}>Agile/Scrum methodologies</div>
                            <div style={style.individualSkill}>Responsive/Mobile First Development</div>
                            <div style={style.individualSkill}>Test-Driven Development</div>
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
  