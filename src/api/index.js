import {FetchJson} from "../lib/Fetch";

export const API = {
    getVideos: (data) => FetchJson.get('/videos', data),
    searchVideos: (data) => FetchJson.get('/search', data),
    channelsList: (data) => FetchJson.get('/channels', data),
    getComments: (data) => FetchJson.get('/commentThreads', data),
    activitiesVideos: (data) => FetchJson.get('/activities', data),
}

