import themes from "../../../themes/themes";
import colors from "../../../themes/colors";

const style = {
  getInTouch: {
    desktop: {
      ...themes.body.desktop,
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
    },
    tablet: {
      ...themes.body.mobile,
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
    },
    mobile: {
      ...themes.body.mobile,
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
    },
  },
  header: {
    ...themes.componentHeader,
    textAlign: "center",
    marginBottom: "30px",
  },
  subHeader: {
    color: colors.grey,
    fontWeight: "bold",
    fontFamily: "Helvetica",
    lineHeight: "normal",
    fontSize: "20px",
    marginBottom: "30px",
    textAlign: "center",
  },
  contact: {
    color: colors.white,
    fontFamily: "Helvetica",
    lineHeight: "normal",
    fontSize: "20px",
    marginBottom: "15px",
    textAlign: "center",
  },
  link: {
    color: "white",
  },
};

export default style;
