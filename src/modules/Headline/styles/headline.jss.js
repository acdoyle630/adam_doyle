import themes from '../../../themes/themes'
import colors from '../../../themes/colors'

const style = (screenSize) => ({
    headline: {
        desktop: {
            ...themes.body.desktop,
            height: '100vh',
            marginTop: '100px',
            marginBottom: '0'
        },
        tablet: {
            ...themes.body.mobile,
            marginTop: '100px',
        },
        mobile: {
            ...themes.body.mobile,
            marginTop: '100px',
        }
    },
    intro: {
        color: colors.grey,
        fontFamily: 'Helvetica',
        lineHeight: '30px',
        fontSize: screenSize === 'desktop' ? '30px' : '20px',
        fontWeight: 'bold',
        marginBottom: screenSize === 'desktop' ? '10vh' : '0vh' 
    },
    myNameIs: {
        color: colors.blue,
        fontSize: screenSize === 'desktop' ? '100px' : '70px',
        fontWeight: 'bold',
        fontFamily: 'Helvetica',
        lineHeight: 'normal',
        marginBottom: screenSize === 'desktop' ? '10vh' : '15px' 
    },
    wat: {
        color: colors.white,
        fontSize:  screenSize === 'desktop' ? '30px' : '20px',
        fontWeight: 'bold',
        fontFamily: 'Helvetica',
        lineHeight:  screenSize === 'desktop' ? '50px' : '30px',
        marginBottom: screenSize === 'desktop' ? '5vh' : '15px', 
    },
    details: {
        color: colors.grey,
        fontWeight: 'bold',
        fontFamily: 'Helvetica',
        lineHeight: '30px',
        fontSize:  screenSize === 'desktop' ? '30px' : '20px',
        marginBottom: screenSize === 'desktop' ? '10vh' : '50px' 
    },
    contact: {
        backgroundColor: colors.blue,
        padding: '5px',
        width: '110px',
        display: 'flex',
        justifyContent: 'center',
        fontWeight: 'bold',
        fontFamily: 'Helvetica',
        lineHeight: '30px',
        fontSize: '15px',
        cursor: 'pointer',
    },
})

export default style