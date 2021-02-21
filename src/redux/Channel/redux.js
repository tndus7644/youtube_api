import {createActions, createReducer} from "reduxsauce";

const initialState = {
    channel:{
        items:[]
    }
}

export const Action = createActions({
    updateState: ['props'],
    channelList:['data']
}, {
    prefix: 'CHANNEL/'
});

export default createReducer(initialState,{
    [Action.Types.UPDATE_STATE] : (state, {props}) => ({
        ...state,
        ...props
    })
});
