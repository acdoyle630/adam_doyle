import React, { Component } from 'react'
import { connect } from 'react-redux'
class ExperienceContainer extends Component {
    
    render() {
      return (
        <div>
            Contact
        </div>
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
  