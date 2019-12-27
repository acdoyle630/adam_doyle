import React,{ Component } from 'react'
import Typing from 'react-typing-animation';
import style from '../styles/headline.jss'

class Title extends Component {
    constructor(props){
        super(props)
        this.state = {
           titleIndex: 0,
           
        }
    }

    componentDidMount = () => {
        window.addEventListener('resize', this.handleResize)
    }

    handleResize = () => {
        
    }

    render(){
        let content = (
            <React.Fragment>
                <Typing
                    loop={true}
                    onFinishedTyping={(() => {
                        const newIndex = this.state.titleIndex === this.props.titles.length -1
                            ? 0
                            : this.state.titleIndex +1
                        this.setState({ titleIndex: newIndex})
                    })}
                >
                    <Typing.Speed ms={5} />
                    <div id={'title'} style={style().title}>
                        {this.props.titles[this.state.titleIndex]}
                    </div>
                    <Typing.Delay ms={1000} />
                    <Typing.Backspace count={this.props.titles[this.state.titleIndex].length + 1} />
                    <Typing.Reset count={1} delay={5} />
                </Typing>
            </React.Fragment>
           )
        return content
    }
}

export default Title