import themes from "../../../../themes/themes";

const style = {
    experience: {
        desktop: {
            ...themes.body.desktop,
        },
        tablet: {
            ...themes.body.mobile,
        },
        mobile: {
            ...themes.body.mobile,
        }
        
    },
    experienceHeader: {
        ...themes.componentHeader
    },
    jobInfo: {
        desktop: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
        },
        tablet: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
        },
        mobile: {
            display: 'flex',
            flexDirection: 'column', 
        }
    }
}

export default style 
