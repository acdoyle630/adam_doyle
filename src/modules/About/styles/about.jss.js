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
            justifyContent: 'space-between',

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
        marginBottom: '50px',
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
        desktop: {
            marginBottom: '10px',
            color: colors.white,
        },
        mobile: {
            marginBottom: '10px',
            color: colors.white,
        }
    },
    bullet: {
        color: colors.blue,
        marginBottom: '15px'
    },
    skillsColumn: {
        display: 'flex',
        flexDirection: 'column',
        marginRight: '20px',
    },
    profilePicture:{
        desktop: {
            width: '200px',
            height: '268.57px',
            marginLeft: '50px',
            marginBottom: '50px',
        },
        mobile: {
            width: '200px',
            height: '268.57px',
            marginBottom: '50px',
        }
    }
}

export default style 
