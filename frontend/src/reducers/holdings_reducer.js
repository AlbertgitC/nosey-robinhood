import {
  RECEIVE_ALL_HOLDINGS,
  RECEIVE_COMPANY_HOLDING
} from '../actions/holdings_actions';

const HoldingsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_HOLDINGS:
      return Object.assign({}, state, action.holdings.data);
    case RECEIVE_COMPANY_HOLDING:
      return Object.assign({}, state, action.companyHolding);
    default:
      return state;
  }
};

export default HoldingsReducer;