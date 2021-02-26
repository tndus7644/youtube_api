import {combineReducers} from 'redux';

import videoReducer from './Video/redux';
import searchReducer from './Search/redux';
import channelReducer from './Channel/redux';
import appReducer from './App/redux';
import commentsReducer from './Comments/redux';

const reducers = combineReducers({
    video: videoReducer,
    search: searchReducer,
    channel: channelReducer,
    app: appReducer,
    comments: commentsReducer,
});

export default reducers;