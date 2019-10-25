import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import UserProfile from './user_profile';
import { fetchUser } from '../../actions/user_actions'

const mapStateToProps = state => ({
  loggedIn: state.session.isAuthenticated,
  user: state.session.user
});

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
    fetchUser: () => dispatch(fetchUser())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);