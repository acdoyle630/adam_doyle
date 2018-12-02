import {
    SET_SCREEN_SIZE
  } from '../actions/screen-size-action'
  
  const initialState = 'desktop';
  
  const setScreenSizeReducer = (state = initialState, action) =>{
    switch(action.type){
      case SET_SCREEN_SIZE:
        return action.screenSize > 480
            ? 'desktop'
            : 'mobile'
      default: return state
    }
  };
  
  
  export default setScreenSizeReducer