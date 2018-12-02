import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { openAbout, closeAbout } from '../../../actions/about-action'
import NavBarComponent from '../components/nav-bar-component'

class NavBarContainer extends Component {
  
  render() {
    return (
        <NavBarComponent
            screenSize={this.props.screenSize}
            aboutOpen={this.props.aboutOpen}
            openAbout={this.props.openAbout}
            closeAbout={this.props.closeAbout}
        />
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
