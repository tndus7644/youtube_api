import {all, takeLatest, call, put} from "redux-saga/effects";
import {Action} from "./redux";
import {API} from "../../api";

const saga = function* () {
    yield all([
        takeLatest(Action.Types.GET_VIDEO, function* ({data}) {
            try{
                const result = yield call(API.getVideo, data)
                console.log("[saga getVideo]", result)
                if (result) {
                    yield put(Action.Creators.updateState({
                        video: result
                    }))
                }
            }catch (e){
                console.log("e", e)
            }
        })
    ])
}

export default saga;