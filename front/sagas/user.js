import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import {
  LOAD_USER_FAILURE,
  LOAD_USER_REQUEST,
  LOAD_USER_SUCCESS,
  LOG_IN_FAILURE,
  LOG_IN_REQUEST,
  LOG_IN_SUCCESS,
  LOG_OUT_FAILURE,
  LOG_OUT_REQUEST,
  LOG_OUT_SUCCESS,
  EDIT_NICKNAME_FAILURE, 
  EDIT_NICKNAME_REQUEST,
  EDIT_NICKNAME_SUCCESS,
} from '../reducers/user';

function logInAPI(loginData) {
  // 서버에 요청을 보내는 부분
  return axios.post('/user/login', loginData, {
    withCredentials: true,
  });
}
function* logIn(action) {
  try {
    const result = yield call(logInAPI, action.data);
    yield put({ // put은 dispatch 동일
      type: LOG_IN_SUCCESS,
      data: result.data,
    });
  } catch (e) { // loginAPI 실패
    console.error(e);
    yield put({
      type: LOG_IN_FAILURE,
    });
  }
}
function* watchLogIn() {
  yield takeEvery(LOG_IN_REQUEST, logIn);
}


function logOutAPI() {
  // 서버에 요청을 보내는 부분
  return axios.post('/user/logout', {}, {
    withCredentials: true,
  });
}
function* logOut() {
  try {
    yield call(logOutAPI);
    yield put({ // put은 dispatch 동일
      type: LOG_OUT_SUCCESS,
    });
  } catch (e) { // loginAPI 실패
    console.error(e);
    yield put({
      type: LOG_OUT_FAILURE,
      error: e,
    });
  }
}
function* watchLogOut() {
  yield takeEvery(LOG_OUT_REQUEST, logOut);
}

function loadUserAPI(userId) { 
  // 서버에 요청을 보내는 부분
  return axios.get(userId ? `/user/${userId}` : '/user/', { // userId(남의정보) 있을때 vs 없을때 
    withCredentials: true,
  });
}
function* loadUser(action) { // 내 정보뿐만 아니라, 남의정보도 같이 불러올 수 있도록 수정 --> action추가 
  try {
    const result = yield call(loadUserAPI, action.data);
    yield put({ // put은 dispatch 동일
      type: LOAD_USER_SUCCESS,
      data: result.data,
      me: !action.data, // action(=남의 아이디)없으면, 내 정보 불러오기 
    });
  } catch (e) { // loginAPI 실패
    console.error(e);
    yield put({
      type: LOAD_USER_FAILURE,
      error: e,
    });
  }
}
function* watchLoadUser() {
  yield takeEvery(LOAD_USER_REQUEST, loadUser);
}

function editNicknameAPI(nickname) {
  // 서버에 요청을 보내는 부분
  return axios.patch('/user/nickname', { nickname }, {
    withCredentials: true,
  });
}
function* editNickname(action) {
  try {
    // yield call(loadFollowersAPI);
    const result = yield call(editNicknameAPI, action.data);
    yield put({ // put은 dispatch 동일
      type: EDIT_NICKNAME_SUCCESS,
      data: result.data,
    });
  } catch (e) { // loginAPI 실패
    console.error(e);
    yield put({
      type: EDIT_NICKNAME_FAILURE,
      error: e,
    });
  }
}
function* watchEditNickname() {
  yield takeEvery(EDIT_NICKNAME_REQUEST, editNickname);
}

export default function* userSaga() {
  yield all([
    fork(watchLogIn),
    fork(watchLogOut),
    fork(watchLoadUser),
    fork(watchEditNickname),
  ]);
}