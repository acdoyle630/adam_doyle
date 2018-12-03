import React from 'react'
import Button from '@material-ui/core/Button'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import { Menu as MenuIcon } from '@material-ui/icons'
import Resume from '../../../resources/Adam-Doyle-Resume.pdf'
import style from '../styles/nav-bar.jss.js'

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

    handleCloseAbout = () => {
        this.handleClose()
        this.props.closeAbout()
    }

    handleOpenAbout = () => {
        this.handleClose()
        this.props.openAbout()
    }
  
    handleClose = () => {
        this.setState({ anchorEl: null })
    }
  
    render() {
      const { anchorEl } = this.state
  
      return (
        <div>
          <Button
            onClick={this.handleClick}
          >
            <MenuIcon />
          </Button>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={this.handleClose}
          >
            <MenuItem
                onClick={this.props.aboutOpen
                    ? this.handleCloseAbout
                    : this.handleOpenAbout
                }
            >
                {this.props.aboutOpen
            ? <div> Home </div>
            : <div> About </div>}
            </MenuItem>
            <MenuItem>
                    <a href={Resume} target={'_blank'} style={style.resumeLink}>Resume</a>
            </MenuItem>
          </Menu>
        </div>
      )
    }
  }
  
  export default Hamburger;