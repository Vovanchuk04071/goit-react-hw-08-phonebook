import axios from 'axios';
import {
  registerSuccess,
  loginSuccess,
  logoutSuccess,
  getCurrentUserSuccess,
  changeLoading,
  fetchError,
} from './auth-action';

axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const register = credentials => async dispatch => {
  dispatch(changeLoading(true));
  try {
    const { data } = await axios.post('/users/signup', credentials);

    token.set(data.token);

    dispatch(registerSuccess(data));
    dispatch(changeLoading(false));
  } catch (error) {
    dispatch(fetchError(error.message));
  }
};

export const login = credentials => async dispatch => {
  dispatch(changeLoading(true));
  try {
    const { data } = await axios.post('/users/login', credentials);

    token.set(data.token);

    dispatch(loginSuccess(data));
    dispatch(changeLoading(false));
  } catch (error) {
    dispatch(fetchError(error.message));
  }
};

export const logout = () => async dispatch => {
  dispatch(changeLoading(true));

  try {
    await axios.post('/users/logout');

    token.unset();
    dispatch(logoutSuccess());
    dispatch(changeLoading(false));
  } catch (error) {
    dispatch(fetchError(error.message));
  }
};

export const getCurrentUser = () => async (dispatch, getState) => {
  const {
    auth: { token: persistedToken },
  } = getState();

  if (!persistedToken) {
    return;
  }

  token.set(persistedToken);
  dispatch(changeLoading(true));
  dispatch(changeLoading());
  try {
    const { data } = await axios.get('/users/current');

    dispatch(getCurrentUserSuccess(data));
    dispatch(changeLoading(false));
  } catch (error) {
    dispatch(fetchError(error.message));
  }
};
