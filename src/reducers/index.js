import {combineReducers} from 'redux'

import setScreenSizeReducer from './screen-size-reducer'
import aboutReducer from './about-reducer'

export default combineReducers({
  screenSize: setScreenSizeReducer,
  aboutOpen: aboutReducer
})