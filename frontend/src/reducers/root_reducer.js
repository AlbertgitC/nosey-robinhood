import { combineReducers } from 'redux';
import sessionReducer from './session_reducer';
import errorsReducer from './errors_reducer';
import companiesReducer from './companies_reducer'

const RootReducer = combineReducers({
  session: sessionReducer,
  errors: errorsReducer,
  companies: companiesReducer
});

export default RootReducer;