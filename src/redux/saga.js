import {all, call} from 'redux-saga/effects'
import videoSaga from './Video/saga';
import SearchSaga from './Search/saga';
import ChannelSaga from './Channel/saga';
import appSaga from './App/saga';
import commentsSaga from './Comments/saga';
import authSaga from './Auth/saga';

function* sagas() {
    yield all ([
        call(videoSaga),
        call(SearchSaga),
        call(ChannelSaga),
        call(appSaga),
        call(commentsSaga),
        call(authSaga),
    ])
}

export default sagas;