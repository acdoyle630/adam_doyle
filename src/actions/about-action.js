export const OPEN_ABOUT = 'OPEN_ABOUT'
export const CLOSE_ABOUT = 'CLOSE_ABOUT'

export const openAbout = function(){
  return {
    type: OPEN_ABOUT,
  }  
}

export const closeAbout = function(){
    return {
      type: CLOSE_ABOUT,
    }  
  }