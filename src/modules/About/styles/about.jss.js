import themes from "../../../themes/themes"
import colors from '../../../themes/colors'

const style = {
    about: {
        desktop: {
            ...themes.body.desktop
        },
        mobile: {
            ...themes.body.mobile
        }
    },
    aboutHeader: {
        ...themes.componentHeader
    },
    aboutContent: {
        desktop: {
            ...themes.componentSubHeader,
            display: 'flex',
            flexDirection: 'row',
        },
        mobile: {
            ...themes.componentSubHeader,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        }
    },
    aboutWords: {
        display: 'flex',
        flexDirection: 'column',
        marginBottom: '50px'
    },
    aboutText: {
        marginRight: '10px',
        marginBottom: '30px',
    },
    skillsHeader: {
        ...themes.componentSubHeader,
        color: colors.grey,
        marginBottom: '30px',
        fontWeight: 'bold',
    },
    skills: {
        display: 'flex',
        flexDirection: 'row',
    },
    individualSkill:{
        marginBottom: '10px'
    },
    skillsColumn: {
        display: 'flex',
        flexDirection: 'column',
        marginRight: '20px',
    },
    profilePicture:{
        width: '200px',
        height: '268.57px'
    }
}

export default style 
