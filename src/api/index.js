import axios from 'axios'

export const API = {
    getVideos:(data) => youTubeApiInstance.get('/videos',{
        params:{
            data
        }
    })
}

export const youTubeApiInstance = axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    timeout:6000,
    params: {
        part: 'snippet',
        maxResults: 5,
        key: 'AIzaSyDRG9_6_3N_NhhQ_yLY2DlDhxUDUC97FbE'
    }
})
