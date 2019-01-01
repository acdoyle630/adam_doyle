import React from 'react'
import style from './job.jss'
import JOB_INFO from '../../../../../constants/job-info'

const  Job = ((props) => {
    const populateBullets = (() => {
       return JOB_INFO[props.selectedCompany].bullets.map((bullet) => {
                return( 
                    <li style={style.bullet}>
                        {bullet}
                    </li>
                )
        })
    })
    return (
        <div style={style.jobs}>
            <div style={style.jobHeader}>
                <div style={style.title}>
                    {`${JOB_INFO[props.selectedCompany].title}@`}
                </div>
                <div style={style.company}>
                    {JOB_INFO[props.selectedCompany].company}
                </div>
            </div>
            <div style={style.dates}>
                {JOB_INFO[props.selectedCompany].dates}
            </div>
            <div style={style.bulletContainer}>
                {populateBullets()}
            </div>
        </div>
    )
})

export default Job