import React from "react";
import style from "./company-names.jss";
import COMPANY_NAMES from "../../../../../constants/company-names";

const CompanyNames = (props) => {
  return (
    <div style={style.companyNameList[props.screenSize]}>
       <div
        style={
          props.selectedCompany === COMPANY_NAMES.HEARTH
            ? style.selectedCompany
            : style.companyName
        }
        onClick={() => {
          props.selectCompany(COMPANY_NAMES.HEARTH);
        }}
      >
        Hearth
      </div>
      <div
        style={
          props.selectedCompany === COMPANY_NAMES.VERTAFORE
            ? style.selectedCompany
            : style.companyName
        }
        onClick={() => {
          props.selectCompany(COMPANY_NAMES.VERTAFORE);
        }}
      >
        Vertafore
      </div>
      <div
        style={
          props.selectedCompany === COMPANY_NAMES.WALMART
            ? style.selectedCompany
            : style.companyName
        }
        onClick={() => {
          props.selectCompany(COMPANY_NAMES.WALMART);
        }}
      >
        Walmart Labs
      </div>
      {/* <div
        style={
          props.selectedCompany === COMPANY_NAMES.CODING_WITH_KIDS
            ? style.selectedCompany
            : style.companyName
        }
        onClick={() => {
          props.selectCompany(COMPANY_NAMES.CODING_WITH_KIDS);
        }}
      >
        Coding With Kids
      </div> */}
    </div>
  );
};

export default CompanyNames;
