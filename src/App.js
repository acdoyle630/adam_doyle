import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { setScreenSize } from './actions/screen-size-action'
import NavBarContainer from './modules/NavBar/containers/nav-bar-container'
import Headline from './modules/Headline/components/headline'
import AboutContainer from './modules/About/containers/about-container'
import ExperienceContainer from './modules/Experience/containers/experience-container'
import Contact from './modules/Contact/containers/contact-container'
import './App.css'

class App extends Component {

  componentWillMount(){
    this.resize()
    window.addEventListener('resize', this.resize)
  }

  resize = () => {
    this.props.setScreenSize(window.innerWidth)
  }

  scrollToMyRef = (elementId) => {
      if(elementId){
      const el = document.getElementById(elementId)
      el.scrollIntoView({
          behavior: 'smooth',
          //block: 'start' + 10
        }) 
    }
  }
  
  render() {
    return (
      <div>
        <NavBarContainer scrollToMyRef={this.scrollToMyRef} />
        <Headline />
        <AboutContainer />
        <ExperienceContainer />
        <Contact />
      </div>
    )
  }
}

const mapStateToProps = (state) =>{
    return {
      screenSize: state.screenSize
    };
  }

  const mapDispatchToProps = dispatch => bindActionCreators(
    {
      setScreenSize,
    },
    dispatch,
  )
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
    )(App);
  