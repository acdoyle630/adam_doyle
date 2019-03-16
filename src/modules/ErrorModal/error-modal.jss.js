import colors from '../../themes/colors'

const style = {
    errorModal: {
        mobile: {
            backgroundColor: 'white',
            margin: 'auto',
            height: '50vh',
            width: '40vw',
            border: '1px solid black'
        },
        desktop: {
            backgroundColor: 'white',
            margin: 'auto',
            height: '40vh',
            width: '300px',
            border: '1px solid black'
        }
    },
    content: {
        margin: '3vh',
    },
    header: {
        margin: '10px',
        fontSize: '16px',
        fontWeight: 'bold',
        marginBottom: '4vh',
    },
    message: {
        desktop:{
            margin: '10px',
            marginBottom: '12vh'
        },
        mobile: {
            margin: '10px',
            marginBottom: '5vh',
        }
    },
    ok: {
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

export default style
