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
            <div style={style.bulletContainer}>
                {populateBullets()}
            </div>
        </div>
    )
})

export default Job