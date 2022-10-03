import { SELECT_COMPANY } from "../actions/selected-company-action";
import COMPANY_NAMES from "../constants/company-names";

const initialState = COMPANY_NAMES.HEARTH;

const selectCompanyReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_COMPANY:
      return action.company;
    default:
      return state;
  }
};

export default selectCompanyReducer;
