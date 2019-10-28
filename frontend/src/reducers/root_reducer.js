import { combineReducers } from 'redux';
import sessionReducer from './session_reducer';
import errorsReducer from './errors_reducer';
import HoldingsReducer from './holdings_reducer';

const RootReducer = combineReducers({
  session: sessionReducer,
  errors: errorsReducer,
  holdings: HoldingsReducer
});

export default RootReducer;