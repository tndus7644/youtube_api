import {all, call} from "redux-saga/effects";
import videoSaga from './Video/saga'

const sagas = function* (){
    all([
        yield call(videoSaga)
    ])
}

export default sagas;