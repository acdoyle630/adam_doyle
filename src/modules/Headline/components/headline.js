import React,{ Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import style from '../styles/headline.jss'
import ContactContainer from '../../Contact/containers/contact-container'
import { openContactModal } from '../../../actions/contact-modal'
import text from '../text/text.js'
import ROUTES from '../../../constants/routes'
import Title from './title'

class Headline extends Component {
    constructor(props){
        super(props)
        this.state = {
           titles: [
               'software engineer',
               'problem solver',
               'adrenaline junkie',
               'risk taker',
               'lifelong learner',
            ],
           currentTitle: 0
        }
    }

    componentWillMount = () => {
        //this.startChangingTitles()
    }

    startChangingTitles = () => {
        setTimeout((this.changeTitle), 6000)
    }

    changeTitle = () => {
        let index = this.state.currentTitle
        const newIndex = index === this.state.titles.length -1
            ? 0
            : ++index
        this.setState({
            currentTitle: newIndex
        })
        //this.startChangingTitles()
    }

    render(){
        return (
        <div style={style(this.props.screenSize).headline[this.props.screenSize]}>
            <div style={style(this.props.screenSize).intro}>
                {text.intro}
            </div>
            <div style={style(this.props.screenSize).myNameIs}>
                {text.myNameIs}
            </div>
            {/* {<div style={style(this.props.screenSize).wat}>
                {text.wat}
            </div>} */}
            {<div style={style(this.props.screenSize).wat}>
                <span>
                    {text.watOne}
                </span>
                <Title titles={this.state.titles} />
                <span>
                    {text.watTwo}
                </span>
            </div>}
            <div style={style(this.props.screenSize).details}>
                {text.details}
            </div>
            <div onClick={(() => {
                this.props.scrollToMyRef(ROUTES.CONTACT)
                // this.props.openContactModal() 
            })} style={style(this.props.screenSize).contact}>
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
  