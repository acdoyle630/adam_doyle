import React,{ Component } from 'react'
import style from './contact-component.jss'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Modal from '@material-ui/core/Modal'
import { Cancel } from '@material-ui/icons'
import { sendEmail } from '../../../actions/send-email'
import ErrorModal from '../../ErrorModal/error-modal'

class Contact extends Component {
    constructor(props){
        super(props)
        this.state = {
            name: '',
            message: '',
            email: '',
            subject: '',
            errorMessage: '',
            error: false,
        }
    }

    handleNameChange = (event) => {
        event.preventDefault();
        this.setState({name: event.target.value })
    }

    handleMessageChange = (event) => {
        event.preventDefault();
        this.setState({message: event.target.value})
    }

    handleEmailChange = (event) => {
        event.preventDefault();
        this.setState({email: event.target.value})
    }

    handleSubjectChange = (event) => {
        event.preventDefault();
        this.setState({subject: event.target.value})
    }

    closeErrorModal = () => {
        this.setState({
            error: false
        })
    }

    checkMail = async () => {

        if(this.state.email && this.state.message){
            await this.props.sendEmail(this.state)
            window.setTimeout(() => {
                this.props.closeContactModal()
            }, 1500)
        } else {
            let errorMessage
            if(!this.state.email && !this.state.message){
                errorMessage = 'Please include an email address and message to send an email'
            }
            else if(!this.state.email){
                errorMessage = 'Please include an email address to send an email'
            } else {
                errorMessage = 'Please include a message to send an email'
            }
            this.setState({
                error:true,
                errorMessage: errorMessage,
                
                
            })
        }
    }

    render(){
        const emailInFlight = this.props.emailStatus.emailInFlight
        const emailReceived = this.props.emailStatus.emailReceived
        const emailFailed = this.props.emailStatus.emailFailed
        return (
            <Modal open={this.props.open} style={style.modal[this.props.screenSize]}>
                <div style={style.contactContent}>
                    <div style={style.header}>
                        <div style={style.headerText}>
                            Get in Touch
                        </div>
                        <Cancel onClick={(() => {
                            this.props.closeContactModal()
                        })} />
                    </div>
                    <input placeholder={'name'} style={style.input} onChange={this.handleNameChange}></input>
                    <input placeholder={'email'} style={style.input} onChange={this.handleEmailChange}></input>
                    <input placeholder={'subject'} style={style.input} onChange={this.handleSubjectChange}></input>
                    <textarea cols={40} placeholder={'message'} style={style.messageInput} onChange={this.handleMessageChange}></textarea>
                    <div style={style.emailButton[emailInFlight]} onClick={(() => {
                        !emailInFlight && this.checkMail() 
                    })}>SUBMIT</div>
                    <ErrorModal 
                        open={this.state.error}
                        errorMessage={this.state.errorMessage}
                        closeErrorModal={this.closeErrorModal} 
                        screenSize={this.props.screenSize}   
                    />
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

  