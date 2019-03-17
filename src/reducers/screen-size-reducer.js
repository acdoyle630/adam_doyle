import {
    SET_SCREEN_SIZE
  } from '../actions/screen-size-action'
  
  const initialState = 'desktop';

  const selectScreenSize = (screenSize) => {
      if(screenSize < 600){
          return 'mobile'
      }
      else if(screenSize >= 600 && screenSize < 1000){
          return 'tablet'
      } else {
          return 'desktop'
      }
  }
  
  const setScreenSizeReducer = (state = initialState, action) =>{
    switch(action.type){
      case SET_SCREEN_SIZE:
        return selectScreenSize(action.screenSize)
      default: return state
    }
  };
  
  
  export default setScreenSizeReducer