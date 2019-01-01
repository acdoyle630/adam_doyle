import React, { Component } from 'react'
import { connect } from 'react-redux'
import Job from '../components/job'

class JobContainer extends Component {
    
    render() {
      return (
        <Job selectedCompany={this.props.selectedCompany}/>
      )
    }
  }

  const mapStateToProps = (state) =>{
    return {
      selectedCompany: state.selectedCompany,
    }
  }

export default connect(
    mapStateToProps,
    )(JobContainer)

  