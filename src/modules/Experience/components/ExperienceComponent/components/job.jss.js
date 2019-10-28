import themes from '../../../../../themes/themes'
import colors from '../../../../../themes/colors'

const style = (screenSize) => ({
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
        fontSize: '24px',
        fontWeight: 'bold',
        marginBottom: '10px',
    },
    bullet: {
        color: colors.white,
        marginBottom: '10px',
        fontSize: screenSize === 'desktop' ? '20px': null
    },
    bulletItem: {
        color: colors.white,
    },
    bulletContainer: {
        desktop: {
            marginTop: '20px',
            width: '55vw'
        },
        tablet: {
            marginTop: '20px',
            width: '55vw'
        },
        mobile: {
            marginTop: '20px',
        }
    }
})

export default style