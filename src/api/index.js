import {FetchJson} from "../lib/Fetch";

export const API = {
    getVideo: (data) => FetchJson.get('/videos', data),
    searchVideo: (data) => FetchJson.get('/search', data),
    channelList: (data) => FetchJson.get('/channels', data)
}

