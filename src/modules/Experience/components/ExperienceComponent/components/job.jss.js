import themes from '../../../../../themes/themes'
import colors from '../../../../../themes/colors'

const style = {
    jobs: {
        marginRight: '50px',
        marginLeft: '20px',
    },
    jobHeader: {
        display: 'flex',
        flexDirection: 'row'
    },
    title: {
        ...themes.componentSubHeader,
        color: colors.primary
    },
    company: {
        ...themes.componentSubHeader,
        color: colors.secondary
    },
    dates: {
        color: colors.primary
    },
}

export default style