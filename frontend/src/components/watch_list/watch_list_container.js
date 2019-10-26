import { connect } from 'react-redux';
import WatchList from './watch_list';
import { fetchUser, addWatchList, removeWatchList } from '../../actions/user_actions'

const mapStateToProps = (state) => ({
  user: state.session.user
});

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUser: () => dispatch(fetchUser()),
    addWatchList: user => dispatch(addWatchList(user)),
    removeWatchList: user => dispatch(removeWatchList(user))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WatchList);