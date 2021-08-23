import { all, fork, takeLatest, put, delay, call } from 'redux-saga/effects';
import axios from 'axios';
import {
  ADD_POST_FAILURE,
  ADD_POST_REQUEST,
  ADD_POST_SUCCESS,
  LIKE_POST_FAILURE,
  LIKE_POST_REQUEST,
  LIKE_POST_SUCCESS,
  LOAD_HASHTAG_POSTS_FAILURE,
  LOAD_HASHTAG_POSTS_REQUEST,
  LOAD_HASHTAG_POSTS_SUCCESS,
  LOAD_MAIN_POSTS_FAILURE,
  LOAD_MAIN_POSTS_REQUEST,
  LOAD_MAIN_POSTS_SUCCESS,
  LOAD_USER_POSTS_FAILURE,
  LOAD_USER_POSTS_REQUEST,
  LOAD_USER_POSTS_SUCCESS, 
  UNLIKE_POST_FAILURE, 
  UNLIKE_POST_REQUEST,
  UNLIKE_POST_SUCCESS,
  LOAD_ALL_HASHTAGS_FAILURE,
  LOAD_ALL_HASHTAGS_REQUEST,
  LOAD_ALL_HASHTAGS_SUCCESS,
  LOAD_ARTICLE_FAILURE,
  LOAD_ARTICLE_REQUEST,
  LOAD_ARTICLE_SUCCESS,
} from '../reducers/post';
import { ADD_POST_TO_ME } from '../reducers/user';

function addPostAPI(postData) {
  return axios.post('/post', postData, {
    withCredentials: true,
  });
}
function* addPost(action) {
  try {
    const result = yield call(addPostAPI, action.data);
    console.log(result);
    yield put({ // post reducer의 데이터를 수정 
      type: ADD_POST_SUCCESS,
      data: result.data,
    });
    yield put({ // user reducer의 데이터를 수정 
      type: ADD_POST_TO_ME,
      data: result.data.id, 
    });
  } catch (e) {
    yield put({
      type: ADD_POST_FAILURE,
      error: e,
    });
  }
}
function* watchAddPost() {
  yield takeLatest(ADD_POST_REQUEST, addPost);
}

function loadMainPostsAPI() {
  return axios.get('/posts'); // 로그인안한 사용자들도 글 목록 볼 수 있음 --> withCredentials: true 넣어줄 필요 X 
}
function* loadMainPosts() {
  try {
    const result = yield call(loadMainPostsAPI);
    yield put({
      type: LOAD_MAIN_POSTS_SUCCESS,
      data: result.data,
    });
  } catch (e) {
    yield put({
      type: LOAD_MAIN_POSTS_FAILURE,
      error: e,
    });
  }
}
function* watchLoadMainPosts() {
  yield takeLatest(LOAD_MAIN_POSTS_REQUEST, loadMainPosts);
}

function loadHashtagPostsAPI(tag) {
  return axios.get(`/hashtag/${tag}`);
}
function* loadHashtagPosts(action) {
  try {
    const result = yield call(loadHashtagPostsAPI, action.data);
    yield put({
      type: LOAD_HASHTAG_POSTS_SUCCESS,
      data: result.data,
    });
  } catch (e) {
    yield put({
      type: LOAD_HASHTAG_POSTS_FAILURE,
      error: e,
    });
  }
}
function* watchLoadHashtagPosts() {
  yield takeLatest(LOAD_HASHTAG_POSTS_REQUEST, loadHashtagPosts);
}

function loadUserPostsAPI(id) {
  return axios.get(`/user/${id}/posts`);
}
function* loadUserPosts(action) {
  try {
    const result = yield call(loadUserPostsAPI, action.data);
    yield put({
      type: LOAD_USER_POSTS_SUCCESS,
      data: result.data,
    });
  } catch (e) {
    yield put({
      type: LOAD_USER_POSTS_FAILURE,
      error: e,
    });
  }
}
function* watchLoadUserPosts() {
  yield takeLatest(LOAD_USER_POSTS_REQUEST, loadUserPosts);
}

function likePostAPI(postId) {
  return axios.post(`/post/${postId}/like`, {}, {
    withCredentials: true,
  });
}
function* likePost(action) {
  try {
    const result = yield call(likePostAPI, action.data);
    yield put({
      type: LIKE_POST_SUCCESS,
      data: {
        postId: action.data, // 해당 게시물 id 
        userId: result.data.userId, // 좋아요 누른사람의 id 
      },
    });
  } catch (e) {
    console.error(e);
    yield put({
      type: LIKE_POST_FAILURE,
      error: e,
    });
  }
}
function* watchLikePost() {
  yield takeLatest(LIKE_POST_REQUEST, likePost);
}

function unlikePostAPI(postId) {
  return axios.delete(`/post/${postId}/like`, {
    withCredentials: true,
  });
}
function* unlikePost(action) {
  try {
    const result = yield call(unlikePostAPI, action.data);
    yield put({
      type: UNLIKE_POST_SUCCESS,
      data: {
        postId: action.data, // 해당 게시물 id 
        userId: result.data.userId, // 좋아요 취소한사람의 id 
      },
    });
  } catch (e) {
    console.error(e);
    yield put({
      type: UNLIKE_POST_FAILURE,
      error: e,
    });
  }
}
function* watchUnlikePost() {
  yield takeLatest(UNLIKE_POST_REQUEST, unlikePost);
}

function loadAllHashtagsAPI() {
  return axios.get('/hashtags');
}
function* loadAllHashtags() {
  try {
    const result = yield call(loadAllHashtagsAPI);
    yield put({
      type: LOAD_ALL_HASHTAGS_SUCCESS,
      data: result.data,
    });
  } catch (e) {
    yield put({
      type: LOAD_ALL_HASHTAGS_FAILURE,
      error: e,
    });
  }
}
function* watchLoadAllHashtags() {
  yield takeLatest(LOAD_ALL_HASHTAGS_REQUEST, loadAllHashtags);
}

function loadArticleAPI(postId) {
  return axios.get(`/article/${postId}`);
}
function* loadArticle(action) {
  try {
    const result = yield call(loadArticleAPI, action.data);
    yield put({
      type: LOAD_ARTICLE_SUCCESS,
      data: result.data, // article 
    });
  } catch (e) {
    yield put({
      type: LOAD_ARTICLE_FAILURE,
      error: e,
    });
  }
}
function* watchLoadArticle() {
  yield takeLatest(LOAD_ARTICLE_REQUEST, loadArticle);
}

export default function* postSaga() {
  yield all([
    fork(watchLoadMainPosts),
    fork(watchAddPost),
    fork(watchLoadHashtagPosts),
    fork(watchLoadUserPosts),
    fork(watchLikePost),
    fork(watchUnlikePost),
    fork(watchLoadAllHashtags),
    fork(watchLoadArticle),
  ]);
}