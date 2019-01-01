import React from 'react'
import CompanyNamesContainer from './containers/company-names-container'
import JobContainer from './containers/job-container.js'
import style from './experience.jss'

const  About = ((props) => {
    return (
        <div id={'experience'} style={style.experience}>
            <div style={style.experienceHeader}>
                Experience
            </div>
            <div style={style.jobInfo}>
                <CompanyNamesContainer />
                <JobContainer />
            </div>
        </div>
    )
})

export default About
  