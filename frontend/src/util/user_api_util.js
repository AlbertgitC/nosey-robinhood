import axios from 'axios';

export const fetchUser = () => {
  return axios.get("/api/users/user")
};

export const addWatchList = (userData) => {
  return axios.patch('/api/users/add_watch_list', userData);
};

export const removeWatchList = (userData) => {
  return axios.patch('/api/users/remove_watch_list', userData);
};