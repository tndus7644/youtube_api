import axios from "axios";

const FetchConsts = {
    GET: 'get',
    POST: 'post',
    PUT: 'put',
    DELETE: 'delete',
}

export const youTubeApiInstance = axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    timeout: 6000,
})

const request = async (method, url, data) => {
    try {
        const config = {
            url,
            method
        }
        if (method === FetchConsts.GET) {
            config.params = {
                ...data,
                key: 'AIzaSyANNh_QFIbDNPpYsaeJG8dDOY7X6juWMBc'
            }
        } else {
            config.data = data
        }

        const result = await youTubeApiInstance(config);

        return result?.data

    } catch (e) {
        if (e.response) {
            if (e.response.status === 401) {
                console.log('로그인창으로 이동');
            } else {
                console.log("e", e)
            }
        } else {
            console.log("e", e)
        }
    }finally {

    }
}

const FetchJson = {
    get: (url, data) => request(FetchConsts.GET, url, data),
    post: (url, data) => request(FetchConsts.POST, url, data),
    put: (url, data) => request(FetchConsts.PUT, url, data),
    delete: (url, data) => request(FetchConsts.DELETE, url, data)
}

export {FetchJson};