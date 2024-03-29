import {all, takeLatest, call, put} from "redux-saga/effects";
import {Action} from "./redux";
import {API} from "../../api";

const saga = function* () {
    yield all([
        takeLatest(Action.Types.COMMENTS_LIST, function* ({data}) {
            try {
                const result = yield call(API.getComments, data)
                console.log("[saga getComments]", result)
                if (result) {
                    yield put(Action.Creators.updateState({
                        comments: result
                    }))
                }
            } catch (e) {
                console.log("e", e)
            }
        })
    ])
}

export default saga;