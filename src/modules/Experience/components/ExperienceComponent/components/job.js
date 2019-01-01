import React from 'react'
import style from './job.jss'
import JOB_INFO from '../../../../../constants/job-info'

const  Job = ((props) => {
    console.log(props)
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
        </div>
    )
})

export default Job