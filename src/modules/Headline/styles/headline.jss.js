import themes from '../../../themes/themes'
import colors from '../../../themes/colors'

const style = {
    headline: {
        ...themes.body,
        marginTop: '50px'
    },
    intro: {
        color: colors.primary,
        fontSize: '15x'
    },
    myNameIs: {
        color: colors.primary,
        fontSize: '50px',
    },
    wat: {
        color: colors.secondary,
        fontSize: '50px',
        marginBottom: '30px',
    },
    details: {
        color: colors.secondary,
        marginBottom: '30px',
    },
    contact: {
        color: colors.third,
        border: `1px ${colors.third} solid`,
        padding: '5px',
        width: '70px',
    }
}

export default style