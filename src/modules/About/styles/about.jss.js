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
    },
    aboutText: {
        marginRight: '10px'
    },
    skills: {
        display: 'flex',
        flexDirection: 'row',
    },
    profilePicture:{
        width: '200px',
        height: '268.57px'
    }
}

export default style 
