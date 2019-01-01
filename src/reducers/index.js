import {combineReducers} from 'redux'

import setScreenSizeReducer from './screen-size-reducer'
import aboutReducer from './about-reducer'
import selectCompanyReducer from './selected-company-reducer'

export default combineReducers({
  screenSize: setScreenSizeReducer,
  aboutOpen: aboutReducer,
  selectedCompany: selectCompanyReducer,
})