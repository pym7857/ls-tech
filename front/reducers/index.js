import { combineReducers } from 'redux';

import user from './user';
import post from './post';
import workspace from './workspace';

const rootReducer = combineReducers({
    user,
    post,
    workspace,
});

export default rootReducer;