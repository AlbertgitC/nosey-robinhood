import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import CompanyNavbar from './company_navbar';

const mapStateToProps = state => ({
  loggedIn: state.session.isAuthenticated,
  user: state.session.user
});

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CompanyNavbar);