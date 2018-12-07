import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { setScreenSize } from './actions/screen-size-action'
import NavBarContainer from './modules/NavBar/containers/nav-bar-container'
import Headline from './modules/Headline/components/headline'
import About from './modules/About/components/about'
import './App.css'

class App extends Component {

  componentWillMount(){
    this.resize()
    window.addEventListener('resize', this.resize)
  }

  resize = () => {
    this.props.setScreenSize(window.innerWidth)
  }
  
  render() {
    return (
      <div>
        <NavBarContainer />
        <Headline />
        <About />
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
  