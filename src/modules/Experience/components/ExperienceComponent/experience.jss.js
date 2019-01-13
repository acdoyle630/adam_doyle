import themes from "../../../../themes/themes";

const style = {
    experience: {
        desktop: {
            ...themes.body.desktop,
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
        mobile: {
            display: 'flex',
            flexDirection: 'column', 
        }
    }
}

export default style 
