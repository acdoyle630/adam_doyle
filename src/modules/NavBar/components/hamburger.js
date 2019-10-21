import React from 'react'
import Button from '@material-ui/core/Button'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import { Menu as MenuIcon } from '@material-ui/icons'
import Resume from '../../../resources/Adam_Doyle_resume.pdf'
import style from '../styles/nav-bar.jss.js'
import ROUTES from '../../../constants/routes'

class Hamburger extends React.Component {
    state = {
      anchorEl: null,
    };
  
    handleClick = event => {
      this.setState({ anchorEl: event.currentTarget })
    }

    handleOpenResume = () => {
        this.handleClose()
    }
  
    handleClose = () => {
        this.setState({ anchorEl: null })
    }

    scroll = async (element) => {
        await this.handleClose()
        this.props.scrollToElement(element)
    }
  
    render() {
      const { anchorEl } = this.state
  
      return (
        <div>
          <Button
            onClick={this.handleClick}
          >
          <MenuIcon style={style.hamburger}/>
          </Button>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={this.handleClose}
          >
            <MenuItem onClick={(() => {
                this.scroll(ROUTES.ABOUT)
            })}> About </MenuItem>
            <MenuItem onClick={(() => {
                this.scroll(ROUTES.EXPERIENCE)
            })}> Experience </MenuItem>
            <MenuItem onClick={(() => {
                this.scroll(ROUTES.CONTACT)
            })}> Contact </MenuItem>
            <MenuItem>
                    <a href={Resume} target={'_blank'} style={style.resumeLink.mobile}>Resume</a>
            </MenuItem>
          </Menu>
        </div>
      )
    }
  }
  
  export default Hamburger;