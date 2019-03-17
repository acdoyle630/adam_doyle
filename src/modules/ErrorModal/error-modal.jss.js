import colors from '../../themes/colors'

const style = {
    errorModal: {
        //backgroundColor: 'white',
        margin: 'auto',
        height: '80px',
        width: '300px',
        border: '1px solid black'
    },
    content: {
        // display: 'flex',
        // flexDirection: 'column',
        backgroundColor: 'white',
        //height: '100%'
        //margin: 'auto',
        //margin: '3vh',
    },
    header: {
        backgroundColor: 'white',
        padding: '24px 24px 20px 24px',
        fontSize: '16px',
        fontWeight: 'bold',
        marginBottom: '4vh',
    },
    message: {
        padding: '0 24px 40px',
    },
    ok: {
        position: 'relative',
        bottom: '8px',
        left: '252px',
        color: colors.blue,
        cursor: 'pointer',
        // backgroundColor: colors.blue,
        // padding: '5px',
        // width: '110px',
        // display: 'flex',
        // justifyContent: 'center',
        fontWeight: 'bold',
        fontFamily: 'Helvetica',
        lineHeight: '30px',
        fontSize: '15px',
        // cursor: 'pointer',
    }
}

export default style
