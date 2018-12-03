import React from 'react'
import Hamburger from './hamburger'
import Resume from '../../../resources/Adam-Doyle-Resume.pdf'
import style from '../styles/nav-bar.jss'

const NavBar = function(props){
  
  return (
    <div style={style.navBar}>
      <div style={style.logo}>
        Logo
      </div>
      {props.screenSize === 'desktop'
      ?
      <div style={style.paths}>
        <div 
            style={style.paths.path}
        >
            {props.aboutOpen
            ? <div 
                onClick={(() => {
                    props.closeAbout()
                })}
            >
                Home
            </div>
            : 
            <div
                onClick={(() => {
                    props.openAbout()
                })}
              >
                About
            </div>}
        </div>
        <div style={style.paths.path}>
            <a href={Resume} target={'_blank'} style={style.resumeLink}>Resume</a>
        </div>
      </div>
      : <Hamburger
          {...props}
        />
      }
    </div>
  );
}

export default NavBar;
