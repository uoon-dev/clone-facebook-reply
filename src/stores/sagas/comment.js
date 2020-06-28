///// SearchSaga.js
import { put, call, takeEvery } from "redux-saga/effects";
import * as actions from "../actions/comment";
 
function* createCommentSaga(data) {
  try {
    yield call(localStorage.setItem('comments', JSON.stringify(data)));
  } 
  catch (error) {
    console.error(error);
    }
}
 
export default function* watchComment() {
  yield takeEvery(actions.CREATE_COMMENT_CONTENT, createCommentSaga);
}