///// index.js
import { spawn } from "redux-saga/effects";
import watchComment from './comment'
 
export default function* rootSaga() {
  yield spawn(watchComment);
}
