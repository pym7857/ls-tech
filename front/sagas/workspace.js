import { all, fork, takeLatest, takeEvery, put, delay, call } from 'redux-saga/effects';
import axios from 'axios';
import {
    LOAD_WORKSPACES_FAILURE,
    LOAD_WORKSPACES_REQUEST,
    LOAD_WORKSPACES_SUCCESS,
    LOAD_WORKSPACE_FAILURE,
    LOAD_WORKSPACE_REQUEST,
    LOAD_WORKSPACE_SUCCESS,
    ADD_WORKSPACE_FAILURE,
    ADD_WORKSPACE_REQUEST,
    ADD_WORKSPACE_SUCCESS,
} from '../reducers/workspace';
import { ADD_WORKSPACE_TO_ME } from '../reducers/user';

function loadWorkspacesAPI() {
    return axios.get('/workspaces'); // 로그인안한 사용자들도 글 목록 볼 수 있음 --> withCredentials: true 넣어줄 필요 X 
}
function* loadWorkspaces() {
    try {
        const result = yield call(loadWorkspacesAPI);
        yield put({
            type: LOAD_WORKSPACES_SUCCESS,
            data: result.data,
        });
    } catch (e) {
        yield put({
            type: LOAD_WORKSPACES_FAILURE,
            error: e,
        });
    }
}
function* watchLoadWorkSpaces() {
    yield takeLatest(LOAD_WORKSPACES_REQUEST, loadWorkspaces);
}

function loadWorkspaceAPI(workspaceUrl) {
    return axios.get(`/workspace/${workspaceUrl}`);
}
function* loadWorkspace(action) {
    try {
        const result = yield call(loadWorkspaceAPI, action.data);
        yield put({
            type: LOAD_WORKSPACE_SUCCESS,
            data: result.data, // workspace 한개 
        });
    } catch (e) {
        yield put({
            type: LOAD_WORKSPACE_FAILURE,
            error: e,
        });
    }
}
function* watchLoadWorkSpace() {
    yield takeLatest(LOAD_WORKSPACE_REQUEST, loadWorkspace);
}

function addWorkspaceAPI(workspaceData) {
    return axios.post('/workspace', workspaceData, {
      withCredentials: true,
    });
  }
function* addWorkspace(action) {
    try {
      const result = yield call(addWorkspaceAPI, action.data);
      yield put({ // workspace reducer의 데이터를 수정 
        type: ADD_WORKSPACE_SUCCESS,
        data: result.data,
      });
      yield put({ // user reducer의 데이터를 수정 
        type: ADD_WORKSPACE_TO_ME,
        data: result.data.id, 
      });
    } catch (e) {
      yield put({
        type: ADD_WORKSPACE_FAILURE,
        error: e,
      });
    }
}
function* watchAddWorkspace() {
    yield takeLatest(ADD_WORKSPACE_REQUEST, addWorkspace);
}

export default function* workspaceSaga() {
  yield all([
    fork(watchLoadWorkSpaces),
    fork(watchLoadWorkSpace),
    fork(watchAddWorkspace),
  ]);
}