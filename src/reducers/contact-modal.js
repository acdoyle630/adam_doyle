import {
    OPEN_CONTACT_MODAL,
    CLOSE_CONTACT_MODAL
  } from '../actions/contact-modal'
  
  const initialState = false
  
  const contactModalReducer = (state = initialState, action) =>{
    switch(action.type){
      case OPEN_CONTACT_MODAL:
        return true
      case CLOSE_CONTACT_MODAL:
        return false
      default: return state
    }
  }
  
  
  export default contactModalReducer