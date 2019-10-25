import * as UserApiUtil from '../util/user_api_util';
import { RECEIVE_CURRENT_USER } from './session_actions'

const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
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
