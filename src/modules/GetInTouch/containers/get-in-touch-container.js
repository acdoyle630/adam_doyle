import React, { Component } from 'react'
import { connect } from 'react-redux'
import GetInTouch from '../components/get-in-touch'

class GetInTouchContainer extends Component {
    
    render() {
        
      return (
          <GetInTouch
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
      )(GetInTouchContainer)
  