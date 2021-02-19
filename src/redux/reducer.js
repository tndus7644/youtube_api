import {combineReducers} from 'redux';

import videoReducer from './Video/redux';

const reducers = combineReducers({
    video: videoReducer
});

export default reducers;