import {all, takeLatest, call, put, select} from "redux-saga/effects";
import {Action} from "./redux";
import {API} from "../../api";


const saga = function* () {
    yield all([
        takeLatest(Action.Types.GET_VIDEOS, function* ({data}) {
            try {
                yield put(Action.Creators.updateState({
                    isLoading: true
                }))
                const {video} = yield select();
                const result = yield call(API.getVideos, {
                    ...data,
                    pageToken: video?.list?.nextPageToken
                })
                console.log("[saga getVideos]", result)
                const prevVideos = yield select(state => state.video.list);
                if (result.items.length === 0) {
                    yield put(Action.Creators.updateState({
                        hasMore: false
                    }))
                }
                if (result) {
                    yield put(Action.Creators.updateState({
                        list: {
                            ...prevVideos,
                            ...result,
                            items: [
                                ...prevVideos.items,
                                ...result.items
                            ]
                        }
                    }))
                }
            } catch (e) {
                console.log("e", e)
            } finally {
                yield put(Action.Creators.updateState({
                    isLoading: false
                }))
            }
        }),
        takeLatest(Action.Types.GET_VIDEO_BY_ID, function* ({data}) {
            try {
                const result = yield call(API.getVideos, data)
                console.log("[saga getVideoById]", result)
                const channelId = result.items[0]?.snippet?.channelId;
                const channelResult = yield call(API.channelsList, {
                    id: channelId,
                    part: 'snippet, statistics'
                })
                console.log("@@ channelResult", channelResult)
                yield put(Action.Creators.getActivitiesVideos(channelId))
                if (result) {
                    yield put(Action.Creators.updateState({
                        detail: {
                            video: result,
                            channel: channelResult
                        }
                    }))
                }
            } catch (e) {
                console.log("e", e)
            }
        }),
        takeLatest(Action.Types.GET_ACTIVITIES_VIDEOS, function* ({channelId}) {
            try {
                const result = yield call(API.activitiesVideos, {
                    channelId,
                    part: 'id, snippet, contentDetails',
                    maxResults: 20
                })
                console.log("[saga activitiesVideos]", result)
                if (result) {
                    yield put(Action.Creators.updateState({
                        activities: result
                    }))
                }
            } catch (e) {
                console.log("e", e)
            }
        })
    ])
}

export default saga;