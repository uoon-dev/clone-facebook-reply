///// SearchSaga.js
import { call, takeEvery, select } from "redux-saga/effects";
import * as actions from "../actions/comment";
import localStorageManager from 'utils/localStorageManager';

function* saveCommentSaga() {
  try {
    const state = yield select();
    yield call(localStorageManager.save, 'comments', state.comment.list);
  }
  catch (error) {
    console.error(error);
  }
}

export default function* watchComment() {
  yield takeEvery([
    actions.CREATE_COMMENT_CONTENT, 
    actions.UPDATE_COMMENT_CONTENT, 
    actions.DELETE_COMMENT_CONTENT, 
    actions.UPDATE_COMMENT_LIKE_USER,
  ], saveCommentSaga);
}