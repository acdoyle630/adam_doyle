import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { closeContactModal } from '../../../actions/contact-modal'
import Contact from '../components/contact-component'

class ExperienceContainer extends Component {

    closeContactModal = () => {
        this.props.closeContactModal()
    }
    
    render() {
      return (
       <Contact
            open={this.props.contactModalIsOpen}
            screenSize={this.props.screenSize}
            closeContactModal={this.props.closeContactModal}
       />
      )
    }
  }
  
  const mapStateToProps = (state) =>{
      return {
        screenSize: state.screenSize,
        contactModalIsOpen: state.contactModalIsOpen
      }
    }
    
  const mapDispatchToProps = dispatch => bindActionCreators(
        {
          closeContactModal,
        },
        dispatch,
      )
    
  
  export default connect(
      mapStateToProps,
      mapDispatchToProps
      )(ExperienceContainer)
  