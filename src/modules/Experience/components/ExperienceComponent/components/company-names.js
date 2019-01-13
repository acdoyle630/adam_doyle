import React from 'react'
import style from './company-names.jss'
import COMPANY_NAMES from '../../../../../constants/company-names'

const  About = ((props) => {

    return (
        <div>
            <div 
                style={props.selectedCompany === COMPANY_NAMES.WALMART
                    ? style.selectedCompany
                    : style.companyName}
                onClick={(() => {
                    props.selectCompany(COMPANY_NAMES.WALMART)
                })}
            >Walmart Labs
            </div>
            <div 
                style={props.selectedCompany === COMPANY_NAMES.CODING_WITH_KIDS
                    ? style.selectedCompany
                    : style.companyName}
                onClick={(() => {
                    props.selectCompany(COMPANY_NAMES.CODING_WITH_KIDS)
                })}
            >Coding With Kids
            </div>
        </div>
    )
})

export default About
  