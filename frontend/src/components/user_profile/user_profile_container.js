import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { fetchCompanyIntraday, fetchCompanyDaily } from '../../actions/company_actions';
import UserProfile from './user_profile';

const mapStateToProps = state => ({
  loggedIn: state.session.isAuthenticated
});

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
    fetchCompanyIntraday: tag => dispatch(fetchCompanyIntraday(tag)),
    fetchCompanyDaily: tag => dispatch(fetchCompanyDaily(tag))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);