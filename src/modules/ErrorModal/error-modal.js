import React,{ Component } from 'react'
import Modal from '@material-ui/core/Modal'
import style from './error-modal.jss'

class ErrorModal extends Component {

   
    render(){
        return (
            <Modal open={this.props.open} style={style.errorModal[this.props.screenSize]} >
                <div style={style.content}>
                    <div style={style.header}>Cannot send email</div>
                    <div style={style.message[this.props.screenSize]}>{this.props.errorMessage}</div>
                    <div style={style.ok} onClick={this.props.closeErrorModal}>OK</div>
                </div>
            </Modal>
        )
    }
}

export default ErrorModal

  