import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { openAbout, closeAbout } from "../../../actions/about-action";
import NavBarComponent from "../components/nav-bar-component";
import resume from "../../../resources/Adam_Doyle_Resume.pdf";
import style from "../styles/nav-bar.jss.js";
import ROUTES from "../../../constants/routes";

class NavBarContainer extends Component {
  viewResume = () => {
    window.open("data:application/pdf" + resume);
  };

  scrollToElement = (route) => {
    this.props.scrollToMyRef(route);
  };

  render() {
    return (
      <div id={ROUTES.HOME}>
        <NavBarComponent
          viewResume={this.viewResume}
          screenSize={this.props.screenSize}
          scrollToElement={this.scrollToElement}
          style={style.navBarComponent}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    screenSize: state.screenSize,
    aboutOpen: state.aboutOpen,
  };
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      openAbout,
      closeAbout,
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBarContainer);
