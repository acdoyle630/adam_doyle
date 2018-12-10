import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { openAbout, closeAbout } from '../../../actions/about-action'
import NavBarComponent from '../components/nav-bar-component'
import resume from '../../../resources/Adam-Doyle-Resume.pdf'
import style from '../styles/nav-bar.jss.js'

class NavBarContainer extends Component {

  viewResume = () => {
      window.open( "data:application/pdf" + resume)
  }

  scrollToElement = () => {
      this.props.scrollToMyRef('about')
  }
  
  render() {
    return (
        <div>
        <NavBarComponent
            viewResume={this.viewResume}
            screenSize={this.props.screenSize}
            scrollToElement={this.scrollToElement}
            style={style.NavBarComponent}
        />
        </div>
    )
  }
}

const mapStateToProps = (state) =>{
    return {
      screenSize: state.screenSize,
      aboutOpen: state.aboutOpen
    }
  }
  
  const mapDispatchToProps = dispatch => bindActionCreators(
    {
      openAbout,
      closeAbout
    },
    dispatch,
  )

export default connect(
    mapStateToProps,
    mapDispatchToProps
    )(NavBarContainer)
