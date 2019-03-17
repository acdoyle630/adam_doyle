import themes from '../../../themes/themes'
import colors from '../../../themes/colors'

const style = {
    headline: {
        desktop: {
            ...themes.body.desktop,
            marginTop: '100px'
        },
        mobile: {
            ...themes.body.mobile,
            marginTop: '100px'
        }
    },
    intro: {
        color: colors.grey,
        fontFamily: 'Helvetica',
        lineHeight: '30px',
        fontSize: '20px',
        fontWeight: 'bold',
        marginBottom: '15px',

    },
    myNameIs: {
        color: colors.blue,
        fontSize: '70px',
        fontWeight: 'bold',
        fontFamily: 'Helvetica',
        lineHeight: 'normal',
        marginBottom: '15px'
    },
    wat: {
        color: colors.white,
        fontSize: '20px',
        marginBottom: '15 px',
        fontWeight: 'bold',
        fontFamily: 'Helvetica',
        lineHeight: '30px',
    },
    details: {
        color: colors.grey,
        fontWeight: 'bold',
        fontFamily: 'Helvetica',
        lineHeight: '30px',
        fontSize: '20px',
        marginBottom: '50px',
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
}

export default style