import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { setScreenSize } from './actions/screen-size-action'
import NavBarContainer from './modules/NavBar/containers/nav-bar-container'
import Headline from './modules/Headline/components/headline'
import AboutContainer from './modules/About/containers/about-container'
import ExperienceContainer from './modules/Experience/containers/experience-container'
import GetInTouchContainer from './modules/GetInTouch/containers/get-in-touch-container'
import './App.css'

class App extends Component {

  componentDidMount = () =>{
    this.resize() 
    window.addEventListener('resize', this.resize)
  }

  resize = () => {
    this.props.setScreenSize(window.innerWidth)
  }

 scrollToMyRef = (elementId) =>{
    if(elementId){
        const element = document.getElementById(elementId)
        const offset = 100
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
    }
}
  
  render() {
    return (
      <div>
        <NavBarContainer scrollToMyRef={this.scrollToMyRef} />
        <Headline 
            screenSize={this.props.screenSize}
            scrollToMyRef={this.scrollToMyRef}
        />
        <AboutContainer />
        <ExperienceContainer />
        <GetInTouchContainer />
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


    // <Headline/>
    // <div>
    //     <NavBar/> Locked to top of div
    //     <AboutContainer />
    //     <ExperienceContainer />
    //     <GetInTouchContainer />
    // </div>
  