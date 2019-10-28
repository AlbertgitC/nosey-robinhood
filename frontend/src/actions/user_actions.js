import * as UserApiUtil from '../util/user_api_util';
import { RECEIVE_CURRENT_USER } from './session_actions'

export const RECEIVE_WATCH_LIST = "RECEIVE_WATCH_LIST";

const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

const receiveWatchList = watchList => ({
  type: RECEIVE_WATCH_LIST,
  watchList
});

export const fetchUser = () => dispatch => (
  UserApiUtil.fetchUser()
    .then(res => {
      const userInfo = {
        id: res.data[0]._id, 
        email: res.data[0].email,
        funds: res.data[0].funds,
        purchase_record_ids: res.data[0].purchase_record_ids,
        watch_list: res.data[0].watch_list
      }
      dispatch(receiveCurrentUser(userInfo))
    })
);

export const addWatchList = userData => dispatch => {
  
  return UserApiUtil.addWatchList(userData).then(
    res => {
      dispatch(receiveWatchList(res.data));
    }
  );
}

export const removeWatchList = userData => dispatch => {

  return UserApiUtil.removeWatchList(userData).then(
    res => {
      dispatch(receiveWatchList(res.data));
    }
  );
}