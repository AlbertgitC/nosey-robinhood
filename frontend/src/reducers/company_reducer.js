import { RECEIVE_COMPANY } from '../actions/company_show_actions';

const CompanyReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch(action.type) {
    case RECEIVE_COMPANY:
      return Object.assign({}, oldState, action.company);
    default:
      return oldState;
  }
};

export default CompanyReducer;