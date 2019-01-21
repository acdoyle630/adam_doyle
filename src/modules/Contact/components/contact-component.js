import React,{ Component } from 'react'
import style from './contact-component.jss'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Modal from '@material-ui/core/Modal'
import { sendEmail } from '../../../actions/send-email'

class Contact extends Component {
    constructor(props){
        super(props)
        this.state = {
            name: '',
            message: '',
            email: '',
        }
    }

    handleNameChange = (event) => {
        event.preventDefault();
        this.setState({name: event.target.value})
    }

    handleMessageChange = (event) => {
        event.preventDefault();
        this.setState({message: event.target.value})
    }

    handleEmailChange = (event) => {
        event.preventDefault();
        this.setState({email: event.target.value})
    }

    render(){
        const emailInFlight = this.props.emailStatus.emailInFlight
        const emailReceived = this.props.emailStatus.emailReceived
        const emailFailed = this.props.emailStatus.emailFailed
        return (
            <Modal open={this.props.open} style={style.modal}>
                <div>
                    <div onClick={(() => {
                        this.props.closeContactModal()
                    })}>CLOSE</div>
                    <input placeholder={'name'} onChange={this.handleNameChange}></input>
                    <input placeholder={'message'} onChange={this.handleMessageChange}></input>
                    <input placeholder={'email'} onChange={this.handleEmailChange}></input>
                    <button style={style.emailButton[emailInFlight]} onClick={(() => {
                        !emailInFlight && this.props.sendEmail(this.state)
                    })}>CLICK TO SEND</button>
                </div>
            </Modal>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        emailStatus: state.emailStatus
    }
}

const mapDispatchToProps = dispatch => bindActionCreators(
    {
      sendEmail
    },
    dispatch,
  )

export default connect(
    mapStateToProps,
    mapDispatchToProps
    )(Contact)

  