import * as emailjs from 'emailjs-com'
import keys from '../api_keys'

export const EMAIL_SENT = 'EMAIL_SENT'
export const EMAIL_RECEIVED = 'EMAIL_RECEIVED'
export const EMAIL_FAILED = 'EMAIL_FAILED'

export const sendEmail = (state) => async (
    dispatch, getState
    ) => {
        dispatch(emailSent())
        const templateParams = {
            to_name: 'Adam',
            from_name: `${state.name} email: ${state.email}`,
            message_html: state.message
        }

        emailjs.send(keys.serviceId, keys.templateId, templateParams, keys.userId)
        .then(function(response) {
            dispatch(emailReceived())
            console.log('SUCCESS!', response.status, response.text)
        }, function(err) {
            dispatch(emailFailed())
            console.log('FAILED...', err);
        })
}

const emailSent = () => {
    return {
        type: EMAIL_SENT
    }
}

const emailReceived = () => {
    return {
        type: EMAIL_RECEIVED
    }
}

const emailFailed = () => {
    return {
        type: EMAIL_FAILED
    }
}