import {
    EMAIL_SENT,
    EMAIL_RECEIVED,
    EMAIL_FAILED
  } from '../actions/send-email'
  
  const initialState = {
    emailInFlight: false,
    emailReceived: false,
    emailFailed: false,
  }
  
  const emailStatusReducer = (state = initialState, action) =>{
    switch(action.type){
      case EMAIL_SENT:
        return Object.assign({}, state, {
            emailInFlight: true,
            emailReceived: false,
            emailFailed: false,
        })
      case EMAIL_RECEIVED:
      return Object.assign({}, state, {
        emailInFlight: false,
        emailReceived: true,
        emailFailed: false,
    })
      case EMAIL_FAILED:
      return Object.assign({}, state, {
        emailInFlight: false,
        emailReceived: false,
        emailFailed: true,
    })
      default: return state
    }
  }
  
  
  export default emailStatusReducer