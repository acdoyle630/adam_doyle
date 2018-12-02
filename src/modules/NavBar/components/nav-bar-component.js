import React from 'react'
import Hamburger from './hamburger'
import style from '../styles/navBar.jss'

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
            Resume
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
