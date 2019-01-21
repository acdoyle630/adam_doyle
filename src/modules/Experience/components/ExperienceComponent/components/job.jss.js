import themes from '../../../../../themes/themes'
import colors from '../../../../../themes/colors'

const style = {
    jobs: {
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
    titleAndDate: {
        color: colors.grey,
        marginBottom: '10px',
    },
    bullet: {
        color: colors.white,
        marginBottom: '10px',
    },
    bulletItem: {
        color: colors.white
    },
    bulletContainer: {
        marginTop: '20px',
    }
}

export default style