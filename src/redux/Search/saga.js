import {all, takeLatest, call, put} from "redux-saga/effects";
import {Action} from "./redux";
import {API} from "../../api";

const saga = function* () {
    yield all([
        takeLatest(Action.Types.SEARCH_VIDEO, function* ({data}) {
            try{
                const result = yield call(API.searchVideos, data)
                console.log("[saga searchVideo]", result)
                if (result) {
                    yield put(Action.Creators.updateState({
                        searchResults: result
                    }))
                }
            }catch (e){
                console.log("e", e)
            }
        })
    ])
}

export default saga;