import { all, fork } from 'redux-saga/effects';
import axios from 'axios';

import user from './user';
import post from './post';
import workspace from './workspace';

axios.defaults.baseURL = 'http://localhost:3065/api';

export default function* rootSaga() {
  yield all([ 
    fork(user), // 얘네는 서로 순서 없기때문에 fork
    fork(post),
    fork(workspace),
  ]);
}