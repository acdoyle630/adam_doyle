import React from 'react'
import Hamburger from './hamburger'
import Resume from '../../../resources/Adam-Doyle-Resume.pdf'
import style from '../styles/nav-bar.jss'
import ROUTES from '../../../constants/routes'

const NavBar = function(props){
  
  return (
    <div style={style.navBar}>
      <div style={style.logo[props.screenSize]}>
        Logo
      </div>
      {props.screenSize === 'desktop'
      ?
      <div style={style.paths}>
        <div onClick={(() => {
            props.scrollToElement(ROUTES.ABOUT)
        })} style={style.paths.path}> About </div>
        <div onClick={(() => {
            props.scrollToElement(ROUTES.EXPERIENCE)
        })} style={style.paths.path}> Experience </div>
        <div onClick={(() => {
            props.scrollToElement(ROUTES.CONTACT)
        })} style={style.paths.path}> Contact </div>
        <div onClick={(() => {
            props.scrollToElement('about')
        })} style={style.paths.path}>
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
