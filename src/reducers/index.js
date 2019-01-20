import {combineReducers} from 'redux'

import setScreenSizeReducer from './screen-size-reducer'
import aboutReducer from './about-reducer'
import selectCompanyReducer from './selected-company-reducer'
import contactModalReducer from './contact-modal'
import emailStatusReducer from './email-status'

export default combineReducers({
  screenSize: setScreenSizeReducer,
  aboutOpen: aboutReducer,
  selectedCompany: selectCompanyReducer,
  contactModalIsOpen: contactModalReducer,
  emailStatus: emailStatusReducer,
})