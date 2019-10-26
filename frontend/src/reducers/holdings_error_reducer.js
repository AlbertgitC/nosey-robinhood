import { RECEIVE_HOLDING_ERROR } from '../actions/holdings_actions';

const HoldingsErrorReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_HOLDING_ERROR:
      return action.errorMessage;
    default:
      return state;
  }
};

export default HoldingsErrorReducer;