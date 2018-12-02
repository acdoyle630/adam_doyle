import React from 'react'
import Button from '@material-ui/core/Button'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'

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
            Open Menu
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
            <MenuItem onClick={this.handleOpenResume}>Resume</MenuItem>
          </Menu>
        </div>
      )
    }
  }
  
  export default Hamburger;