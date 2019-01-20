import {
    OPEN_ABOUT,
    CLOSE_ABOUT
  } from '../actions/about-action'
  
  const initialState = false;
  
  const aboutReducer = (state = initialState, action) =>{
      console.log(action)
    switch(action.type){
      case OPEN_ABOUT:
        return true
      case CLOSE_ABOUT:
        return false
      default: return state
    }
  };
  
  
  export default aboutReducer