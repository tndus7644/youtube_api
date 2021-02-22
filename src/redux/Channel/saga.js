import {all, takeLatest, call, put} from "redux-saga/effects";
import {Action} from "./redux";
import {API} from "../../api";

const saga = function* () {
    yield all([
        takeLatest(Action.Types.CHANNEL_LIST, function* ({data}) {
            try{
                const result = yield call(API.channelList, data)
                console.log("[saga channelList]", result)
                if (result) {
                    yield put(Action.Creators.updateState({
                        channel: result
                    }))
                }
            }catch (e){
                console.log("e", e)
            }
        })
    ])
}

export default saga;