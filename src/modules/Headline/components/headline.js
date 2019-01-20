import React,{ Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import style from '../styles/headline.jss'
import ContactContainer from '../../Contact/containers/contact-container'
import { openContactModal } from '../../../actions/contact-modal'
import text from '../text/text.js'

class Headline extends Component {

    render(){
        return (
        <div style={style.headline[this.props.screenSize]}>
            <div style={style.intro}>
                {text.intro}
            </div>
            <div style={style.myNameIs}>
                {text.myNameIs}
            </div>
            <div style={style.wat}>
                {text.wat}
            </div>
            <div style={style.details}>
                {text.details}
            </div>
            <div onClick={(() => {
                this.props.openContactModal()
            })} style={style.contact}>
                {text.contact}
            </div>
            <ContactContainer />
        </div>
        )
    }   
}

const mapDispatchToProps = dispatch => bindActionCreators(
    {
      openContactModal,
    },
    dispatch,
  )

export default connect(
    undefined,
    mapDispatchToProps
    )(Headline)
  