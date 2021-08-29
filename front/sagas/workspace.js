import { all, fork, takeLatest, takeEvery, put, delay, call } from 'redux-saga/effects';
import axios from 'axios';
import {
    LOAD_WORKSPACES_FAILURE,
    LOAD_WORKSPACES_REQUEST,
    LOAD_WORKSPACES_SUCCESS,
    LOAD_WORKSPACE_FAILURE,
    LOAD_WORKSPACE_REQUEST,
    LOAD_WORKSPACE_SUCCESS,
} from '../reducers/workspace';

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

export default function* workspaceSaga() {
  yield all([
    fork(watchLoadWorkSpaces),
    fork(watchLoadWorkSpace),
  ]);
}