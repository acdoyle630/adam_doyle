import React, { Component } from 'react'
import { connect } from 'react-redux'
import About from '../components/about'
class AboutContainer extends Component {
    
    render() {
      return (
          <About
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
      )(AboutContainer)
  