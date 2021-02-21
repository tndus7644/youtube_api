import {combineReducers} from 'redux';

import videoReducer from './Video/redux';
import searchReducer from './Search/redux';
import channelReducer from './Channel/redux';

const reducers = combineReducers({
    video: videoReducer,
    search: searchReducer,
    channel: channelReducer,
});

export default reducers;