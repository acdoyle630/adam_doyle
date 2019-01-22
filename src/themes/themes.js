import colors from './colors'

const fontSize = {
    componentHeader: '30px',
}   

const themes = {
    body: {
        desktop: {
            marginLeft: '203px',
            marginRight: '203px',
            marginBottom: '150px',
            backgroundColor: colors.background
        },
        mobile: {
            marginBottom: '150px',
            backgroundColor: colors.background,
            marginLeft: '10px',
            marginRight: '10px',
        }
    },
    componentHeader: {
        color: colors.blue,
        fontSize: fontSize.componentHeader, 
        marginBottom: '15px',
        fontWeight: 'bold',
        fontFamily: 'Helvetica',
        lineHeight: 'normal',
    },
    componentSubHeader: {
        color: colors.white,
        fontFamily: 'Helvetica',
        lineHeight: 'normal',

    }
}

export default themes