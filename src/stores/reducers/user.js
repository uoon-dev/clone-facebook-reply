import { handleActions } from 'redux-actions';
import * as actions from '../actions/user';
import mumrikImage from "images/mumrik.png";
import catImage from "images/cat.png";
import { v4 as uuidv4 } from 'uuid'

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
    [actions.changeUserInfo]: (state, action) => {
      return ({
        ...state,
        activeUser: action.payload.activeUser
      }
      )
    } 
  },
  initialState
)