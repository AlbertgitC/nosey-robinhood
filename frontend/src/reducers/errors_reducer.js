import { combineReducers } from 'redux';

import SessionErrorsReducer from './session_errors_reducer';
import HoldingsErrorReducer from './holdings_error_reducer';

export default combineReducers({
  session: SessionErrorsReducer,
  holdings: HoldingsErrorReducer
});