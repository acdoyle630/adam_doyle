import colors from '../../../themes/colors'

const style = {
    navBar: {
        desktop: {
            cursor: 'pointer',
            height: '9vh',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            //borderBottom: '1px black solid', Add box shadow when in movement
            backgroundColor: colors.background,
            position: 'fixed',
            width: '100vw',
            marginTop: '-100px',
            //marginLeft: '103px'
        },
        mobile: {
            cursor: 'pointer',
            height: '9vh',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            //borderBottom: '1px black solid', Add box shadow when in movement
            backgroundColor: colors.background,
            position: 'fixed',
            width: '100vw',
            marginTop: '-100px',
           // marginLeft: '10px'
        }
    },
    logo: {
        desktop: {
            height: '30px',
            color: colors.white,
            marginLeft: '203px'
        },
        mobile: {
            height: '30px',
            color: colors.white,
        }
    },
    paths: {
        display: 'flex',
        flexDirection: 'row',
        path: {
            marginRight: '30px',
            cursor: 'pointer',
            color: colors.white,
        }
    },
    hamburger: {
        color: colors.white
    },
    resumeLink: {
        textDecoration: 'none',
        color: colors.white,
        border: `1px solid ${colors.white}`,
        width: '107px',
        height: '40px',
        boxSizing: 'border-box',
        borderRadius: '5px',
        padding: '3px',
        mobile: {
            textDecoration: 'none',
            color: 'black'
        }
    }
}

export default style