import {all, call} from 'redux-saga/effects'
import videoSaga from './Video/saga';
import SearchSaga from './Search/saga';
import ChannelSaga from './Channel/saga';

function* sagas() {
    yield all ([
        call(videoSaga),
        call(SearchSaga),
        call(ChannelSaga),
    ])
}

export default sagas;