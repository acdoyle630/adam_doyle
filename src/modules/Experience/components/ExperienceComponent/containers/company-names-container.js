import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { selectCompany } from '../../../../../actions/selected-company-action'
import CompanyNames from '../components/company-names'

class CompanyNamesContainer extends Component {
    
    render() {
      return (
        <CompanyNames
            selectCompany={this.props.selectCompany}
            selectedCompany={this.props.selectedCompany}
        />
      )
    }
  }
  
  const mapStateToProps = (state) =>{
      return {
        screenSize: state.screenSize,
        selectedCompany: state.selectedCompany
      }
    }

    const mapDispatchToProps = dispatch => bindActionCreators(
        {
          selectCompany
        },
        dispatch,
      )
    
  
  export default connect(
      mapStateToProps,
      mapDispatchToProps
      )(CompanyNamesContainer)
  