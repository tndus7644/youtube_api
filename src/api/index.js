import axios from 'axios'

export const API = {
    getVideo:(data) => youTubeApiInstance.get('/videos',{
        params: data
    }),
    searchVideo:(data) => youTubeApiInstance.get('/search', {
        params: data
    }),
    channelList:(data) => youTubeApiInstance.get('/channels', {
        params: data
    })
}

export const youTubeApiInstance = axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    timeout:6000,
    params: {
        part: 'snippet',
        key: 'AIzaSyAbOzs-0FFtoKUvbE1_qKJImIDS25-QnTk'
    }
})
