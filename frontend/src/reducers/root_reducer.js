import { combineReducers } from 'redux';
import sessionReducer from './session_reducer';
import errorsReducer from './errors_reducer';
import companiesReducer from './companies_reducer';
import HoldingsReducer from './holdings_reducer';

const RootReducer = combineReducers({
  session: sessionReducer,
  errors: errorsReducer,
  companies: companiesReducer,
  holdings: HoldingsReducer
});

export default RootReducer;