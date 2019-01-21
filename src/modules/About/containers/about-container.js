import React, { Component } from 'react'
import { connect } from 'react-redux'
import About from '../components/about'
class AboutContainer extends Component {
    
    render() {
      return (
          <div id={'about'}>
            <About screenSize={this.props.screenSize} />
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
      )(AboutContainer)
  