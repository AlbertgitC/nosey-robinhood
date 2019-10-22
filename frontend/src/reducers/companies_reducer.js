import { RECEIVE_COMPANY } from '../actions/company_actions';

const defaultState = [];

const companiesReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_COMPANY:
      return state.concat([action.company]);
    default:
      return state;
  }
};

export default companiesReducer;