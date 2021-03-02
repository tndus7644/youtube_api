import {createActions, createReducer} from "reduxsauce";

const initialState = {
    hasMore: true,
    isLoading: false,
    list: {
        items: []
    },
    activities:{}
}

export const Action = createActions({
    updateState: ['props'],
    getVideos: ['data'],
    getVideoById: ['data'],
    getActivitiesVideos:['channelId']
}, {
    prefix: 'VIDEO/'
});

export default createReducer(initialState, {
    [Action.Types.UPDATE_STATE]: (state, {props}) => ({
        ...state,
        ...props
    })
});
