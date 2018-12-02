export const SET_SCREEN_SIZE = 'SET_SCREEN_SIZE'

export const setScreenSize = function(screenSize){
  return {
    type: SET_SCREEN_SIZE,
    screenSize: screenSize
  }  
}