import React from 'react'
import Hamburger from './hamburger'
import style from '../styles/navBar.jss'

const NavBarMobile = function(props){
  return (
    <div style={style.navBar}>
        <div style={style.logo}>
            Logo
        </div>
        <Hamburger />
    </div>
  );
}

export default NavBarMobile;
