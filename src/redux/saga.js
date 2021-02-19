import {all, call} from 'redux-saga/effects'
import videoSaga from './Video/saga';

function* sagas() {
    yield all ([
        call(videoSaga)
    ])
}

export default sagas;