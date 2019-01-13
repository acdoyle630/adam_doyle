import themes from '../../../themes/themes'
import colors from '../../../themes/colors'

const style = {
    getInTouch: {
        desktop: {
            ...themes.body.desktop,
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
        },
        mobile: {
            ...themes.body.mobile,
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
        }
    },
    header: {
        ...themes.componentHeader,
        textAlign: 'center'
    },
    subHeader: {
        color: colors.grey,
        fontWeight: 'bold',
        fontFamily: 'Helvetica',
        lineHeight: 'normal',
        fontSize: '20px',
        marginBottom: '15px',
        textAlign: 'center'
    },
    contact: {
        color: colors.white,
        fontFamily: 'Helvetica',
        lineHeight: 'normal',
        fontSize: '20px',
        marginBottom: '15px',
        textAlign: 'center'
    }
}

export default style