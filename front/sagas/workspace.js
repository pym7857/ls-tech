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
    LOAD_CHANNELS_FAILURE,
    LOAD_CHANNELS_REQUEST,
    LOAD_CHANNELS_SUCCESS,
    LOAD_CHANNEL2S_FAILURE,
    LOAD_CHANNEL2S_REQUEST,
    LOAD_CHANNEL2S_SUCCESS,
    ADD_CH1_FAILURE,
    ADD_CH1_REQUEST,
    ADD_CH1_SUCCESS,
    ADD_CH2_FAILURE,
    ADD_CH2_REQUEST,
    ADD_CH2_SUCCESS,
    ADD_CH1_TO_WORKSPACE,
} from '../reducers/workspace';
import { ADD_WORKSPACE_TO_ME } from '../reducers/user';

function loadWorkspacesAPI() {
    return axios.get('/workspaces');
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

function loadChannelsAPI(workspaceUrl) {
  return axios.get(`/workspaces/${workspaceUrl}`); 
}
function* loadChannels(action) {
  try {
      const result = yield call(loadChannelsAPI, action.data);
      yield put({
          type: LOAD_CHANNELS_SUCCESS,
          data: result.data,
      });
  } catch (e) {
      yield put({
          type: LOAD_CHANNELS_FAILURE,
          error: e,
      });
  }
}
function* watchLoadChannels() {
  yield takeLatest(LOAD_CHANNELS_REQUEST, loadChannels);
}

function loadChannels2API(ch1Id) {
  return axios.get(`/workspaces/channel2/${ch1Id}`); 
}
function* loadChannels2(action) {
  try {
      const result = yield call(loadChannels2API, action.data);
      yield put({
          type: LOAD_CHANNEL2S_SUCCESS,
          data: result.data,
      });
  } catch (e) {
      yield put({
          type: LOAD_CHANNEL2S_FAILURE,
          error: e,
      });
  }
}
function* watchLoadChannels2() {
  yield takeLatest(LOAD_CHANNEL2S_REQUEST, loadChannels2);
}

function addChannel1API(channel1Data) {
  return axios.post('/workspace/ch1', channel1Data, {
    withCredentials: true,
  });
}
function* addChannel1(action) {
  try {
    const result = yield call(addChannel1API, action.data);
    yield put({ // workspace reducer의 데이터를 수정 
      type: ADD_CH1_SUCCESS,
      data: result.data,
    });
  } catch (e) {
    yield put({
      type: ADD_CH1_FAILURE,
      error: e,
    });
  }
}
function* watchAddChannel1() {
  yield takeLatest(ADD_CH1_REQUEST, addChannel1);
}

function addChannel2API(channel2Data) {
  return axios.post('/workspace/ch2', channel2Data, {
    withCredentials: true,
  });
}
function* addChannel2(action) {
  try {
    const result = yield call(addChannel2API, action.data);
    yield put({ // workspace reducer의 데이터를 수정 
      type: ADD_CH2_SUCCESS,
      data: result.data,
    });
  } catch (e) {
    yield put({
      type: ADD_CH2_FAILURE,
      error: e,
    });
  }
}
function* watchAddChannel2() {
  yield takeLatest(ADD_CH2_REQUEST, addChannel2);
}

export default function* workspaceSaga() {
  yield all([
    fork(watchLoadWorkSpaces),
    fork(watchLoadWorkSpace),
    fork(watchAddWorkspace),
    fork(watchLoadChannels),
    fork(watchLoadChannels2),
    fork(watchAddChannel1),
    fork(watchAddChannel2),
  ]);
}