import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';
import MainPage from './main/main_page';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import UserProfileContainer from './user_profile/user_profile_container';
import CompanyShow from './company/company_show_container';

const App = () => (
  <div>
    <Switch>
      <AuthRoute exact path="/" component={MainPage} />
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <ProtectedRoute exact path="/users/:userId" component={UserProfileContainer} />      
      <ProtectedRoute path='/companies/:company_id' component={CompanyShow} />
    </Switch>
  </div>
  
);

export default App;