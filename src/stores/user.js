import { createAction, handleActions } from 'redux-actions';
import mumrikImage from "images/mumrik.png";
import catImage from "images/cat.png";
import { v4 as uuidv4 } from 'uuid'

const CHANGE_USER_INFO = 'CHANGE_USER_INFO';

export const changeUserInfo = createAction(CHANGE_USER_INFO, data => data);

const testUser1 =  {
  id: uuidv4(),
  name: 'uoon',
  profileImageUrl: mumrikImage,
}

const testUser2 = {
  id: uuidv4(),
  name: 'shine',
  profileImageUrl: catImage,
}

const initialState = {
  testUser1,
  testUser2,
  activeUser: testUser1,
};

export default handleActions (
  {
    [CHANGE_USER_INFO]: (state, action) => {
      return ({
        ...state,
        activeUser: action.payload.activeUser
      }
      )
    } 
  },
  initialState
)