import React from 'react'
import style from './job.jss'
import JOB_INFO from '../../../../../constants/job-info'

const  Job = ((props) => {
    const populateBullets = (() => {
       return JOB_INFO[props.selectedCompany].bullets.map((bullet) => {
                return(
                    <li style={style(props.screenSize).bullet}>
                        {bullet}
                    </li>
                )
        })
    })
    return (
        <div style={style(props.screenSize).jobs}>
            <div style={style(props.screenSize).bulletContainer[props.screenSize]}>
                <div style={style(props.screenSize).titleAndDate}>{`${JOB_INFO[props.selectedCompany].title} ${JOB_INFO[props.selectedCompany].dates}`}</div>
                {populateBullets()}
            </div>
        </div>
    )
})

export default Job