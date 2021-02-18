import {combineReducers} from 'redux';

import videoReducer from './Video/redux'

const reducer = combineReducers({
    video: videoReducer
})

export default reducer;