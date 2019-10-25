import { RECEIVE_PURCHASE_ERROR } from '../actions/holdings_actions';

const HoldingsErrorReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_PURCHASE_ERROR:
      return action.errorMessage;
    default:
      return state;
  }
};

export default HoldingsErrorReducer;