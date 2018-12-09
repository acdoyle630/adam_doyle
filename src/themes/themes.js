import colors from './colors'

const fontSize = {
    componentHeader: '30px',
    componentSubHeader: '20px',
}   

const themes = {
    body: {
        marginLeft: '50px',
        marginBottom: '50px'
    },
    componentHeader: {
        color: colors.primary,
        fontSize: fontSize.componentHeader
    },
    componentSubHeader: {
        color: colors.secondary,
        fontSize: fontSize.componentSubHeader,
    }
}

export default themes