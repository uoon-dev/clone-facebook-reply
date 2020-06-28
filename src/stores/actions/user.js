import { createAction } from 'redux-actions';
const CHANGE_USER_INFO = 'CHANGE_USER_INFO';

export const changeUserInfo = createAction(CHANGE_USER_INFO, data => data);