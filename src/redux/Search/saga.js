import {all, takeLatest, call, put} from "redux-saga/effects";
import {Action} from "./redux";
import {API} from "../../api";

const saga = function* () {
    yield all([
        takeLatest(Action.Types.SEARCH_VIDEO, function* ({data}) {
            try{
                const result = yield call(API.searchVideo, data)
                console.log("[saga searchVideo]", result.data)
                if (result.data) {
                    yield put(Action.Creators.updateState({
                        searchResults: result.data
                    }))
                }
            }catch (e){
                console.log("e", e)
            }
        })
    ])
}

export default saga;