import React, { Component } from 'react'
import { connect } from 'react-redux'
import Experience from '../components/ExperienceComponent/experience'
class ExperienceContainer extends Component {
    
    render() {
      return (
          <Experience
              screenSize={this.props.screenSize}
          />
      )
    }
  }
  
  const mapStateToProps = (state) =>{
      return {
        screenSize: state.screenSize
      }
    }
    
  
  export default connect(
      mapStateToProps,
      )(ExperienceContainer)
  