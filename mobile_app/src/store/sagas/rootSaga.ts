import saga from "redux-saga";
import { all, fork } from "redux-saga/effects";
import authSaga from "./authSaga";
import linkDataSaga from "./linkDataSaga";
// import {사가 함수들이 들어감}  from 'redux-saga/effects'
export default function* rootSaga() {
  yield all([fork(authSaga), fork(linkDataSaga)]);
}
