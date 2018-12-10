import themes from "../../../themes/themes";

const style = {
    about: {
        ...themes.body
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
        marginBottom: '10px'
    },
    skills: {
        display: 'flex',
        flexDirection: 'row',
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
