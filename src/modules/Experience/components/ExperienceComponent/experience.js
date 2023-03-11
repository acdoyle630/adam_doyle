import React from "react";
import CompanyNamesContainer from "./containers/company-names-container";
import JobContainer from "./containers/job-container.js";
import style from "./experience.jss";

const About = (props) => {
  return (
    <div id={"experience"} style={style.experience[props.screenSize]}>
      <div style={style.experienceHeader}>Experience</div>
      <div style={style.jobInfo[props.screenSize]}>
        <CompanyNamesContainer />
        <JobContainer />
      </div>
    </div>
  );
};

export default About;
