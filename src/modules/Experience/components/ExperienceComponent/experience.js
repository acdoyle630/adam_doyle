import React from 'react'
import CompanyNamesContainer from './containers/company-names-container'
import style from './experience.jss'

const  About = ((props) => {
    return (
        <div id={'experience'} style={style.experience}>
            <div style={style.experienceHeader}>
                Experience
            </div>
            <CompanyNamesContainer />
        </div>
    )
})

export default About
  