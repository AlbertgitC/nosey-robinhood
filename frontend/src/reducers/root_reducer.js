import { combineReducers } from 'redux';
import sessionReducer from './session_reducer';
import errorsReducer from './errors_reducer';
import CompanyReducer from './company_reducer';

const RootReducer = combineReducers({
  session: sessionReducer,
  companies: CompanyReducer,
  errors: errorsReducer
});

export default RootReducer;