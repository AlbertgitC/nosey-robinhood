import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';

import UserProfile from './user_profile';

const mapStateToProps = state => ({
  loggedIn: state.session.isAuthenticated
});

export default connect(mapStateToProps, { logout })(UserProfile);