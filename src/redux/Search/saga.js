import {all, takeLatest, call, put, select} from "redux-saga/effects";
import {Action} from "./redux";
import {API} from "../../api";

const saga = function* () {
    yield all([
        takeLatest(Action.Types.SEARCH_VIDEO, function* ({data}) {
            try {
                const result = yield call(API.searchVideos, data)
                console.log("[saga searchVideo]", result)
                if (result) {
                    yield put(Action.Creators.updateState({
                        searchResults: result
                    }))
                }
            } catch (e) {
                console.log("e", e)
            }
        }),
        takeLatest(Action.Types.SEARCH_VIDEO_MORE, function* ({data}) {
            try {
                const prevVideos = yield select(state => state.search.searchResults)
                const result = yield call(API.searchVideos, data)
                console.log("[saga searchMoreVideos]", result)
                if (result) {
                    yield put(Action.Creators.updateState({
                        searchResults: {
                            ...result,
                            ...prevVideos,
                            items:[
                                ...prevVideos.items,
                                ...result.items
                            ]
                        }
                    }))
                }
            } catch (e) {
                console.log("e", e)
            }


        })
    ])
}

export default saga;