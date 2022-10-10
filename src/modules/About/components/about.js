import React from "react";
import style from "../styles/about.jss";
import text from "../text/text";
import profilePicture from "../../../images/Adam_Doyle_img.jpg";

const About = (props) => {
  function mySkills(screenSize) {
    if (screenSize === "desktop" || screenSize === "tablet") {
      return (
        <div style={style.skills}>
          <div style={style.skillsColumn}>
            <li style={style.bullet}>
              <span style={style.individualSkill[screenSize]}>
                JavaScript & Typescrip
              </span>
            </li>
            <li style={style.bullet}>
              <span style={style.individualSkill[screenSize]}>HTML & CSS</span>
            </li>
            <li style={style.bullet}>
              <span style={style.individualSkill[screenSize]}>
                React & Redux
              </span>
            </li>
            <li style={style.bullet}>
              <span style={style.individualSkill[screenSize]}>Jest/Mocha</span>
            </li>
          </div>
          <div style={style.skillsColumn}>
            <li style={style.bullet}>
              <span style={style.individualSkill[screenSize]}>Node</span>
            </li>
            <li style={style.bullet}>
              <span style={style.individualSkill[screenSize]}>MongoDB</span>
            </li>
            <li style={style.bullet}>
              <span style={style.individualSkill[screenSize]}>Express</span>
            </li>
            <li style={style.bullet}>
              <span style={style.individualSkill[screenSize]}>Go</span>
            </li>
          </div>
          <div style={style.skillsColumn}>
            <li style={style.bullet}>
              <span style={style.individualSkill[screenSize]}>
                Agile/Scrum methodologies
              </span>
            </li>
            <li style={style.bullet}>
              <span style={style.individualSkill[screenSize]}>
                Responsive/Mobile First Development
              </span>
            </li>
            <li style={style.bullet}>
              <span style={style.individualSkill[screenSize]}>
                Test-Driven Development
              </span>
            </li>
            <li style={style.bullet}>
              <span style={style.individualSkill[screenSize]}>CI/CD</span>
            </li>
          </div>
        </div>
      );
    } else {
      return (
        <div style={style.skills}>
          <div style={style.skillsColumn}>
            <div style={style.individualSkill[screenSize]}>JavaScript</div>
            <div style={style.individualSkill[screenSize]}>HTML & CSS</div>
            <div style={style.individualSkill[screenSize]}>React & Redux</div>
            <div style={style.individualSkill[screenSize]}>Node</div>
            <div style={style.individualSkill[screenSize]}>Cypress</div>
          </div>
          <div style={style.skillsColumn}>
            <div style={style.individualSkill[screenSize]}>MongoDB</div>
            <div style={style.individualSkill[screenSize]}>
              Agile/Scrum methodologies
            </div>
            <div style={style.individualSkill[screenSize]}>
              Responsive/Mobile First Development
            </div>
            <div style={style.individualSkill[screenSize]}>
              Test-Driven Development
            </div>
          </div>
        </div>
      );
    }
  }

  return (
    <div style={style.about[props.screenSize]}>
      <div style={style.aboutHeader}>{text.aboutHeader}</div>
      <div style={style.aboutContent[props.screenSize]}>
        <div style={style.aboutWords}>
          <div style={style.aboutText}>{text.aboutTextP1}</div>
          <div style={style.aboutText}>{text.aboutTextP2}</div>
          <div style={style.aboutText}>{text.aboutTextP3}</div>
        </div>
        <div>
          <img
            style={style.profilePicture[props.screenSize]}
            src={profilePicture}
            alt="Adam Doyle"
          />
        </div>
      </div>
      <div>
        <div style={style.skillsHeader}>{text.skillsHeader}</div>
        <div>{mySkills(props.screenSize)}</div>
      </div>
    </div>
  );
};

export default About;
