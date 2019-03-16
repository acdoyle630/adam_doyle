import colors from '../../../themes/colors'

const style = {
    modal: {
        mobile: {
        backgroundColor: colors.white,
        height: '75vh',
        width: '75vw',
        margin: 'auto'
        },
        desktop: {
        backgroundColor: colors.white,
        height: '75vh',
        width: '600px',
        margin: 'auto'
        }
    },
    contactContent: {
        margin: '3vh',
        height: '69vh',
        display: 'flex',
        flexDirection: 'column',
    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: '4vh',
    },
    headerText: {
        color: colors.blue,
        fontSize: '26px',
        fontWeight: 'bold',
    },
    input: {
        height: '5vh',
        marginBottom: '4vh',
    },
    messageInput: {
        height: '20vh',
        marginBottom: '4vh'
    },
    emailButton: {
        true: {
            backgroundColor: 'grey',
            padding: '5px',
            width: '110px',
            display: 'flex',
            justifyContent: 'center',
            fontWeight: 'bold',
            fontFamily: 'Helvetica',
            lineHeight: '30px',
            fontSize: '15px',
            cursor: 'pointer',
        },
        false: {
            backgroundColor: colors.blue,
            padding: '5px',
            width: '110px',
            display: 'flex',
            justifyContent: 'center',
            fontWeight: 'bold',
            fontFamily: 'Helvetica',
            lineHeight: '30px',
            fontSize: '15px',
            cursor: 'pointer',
        }
    }
}

export default style