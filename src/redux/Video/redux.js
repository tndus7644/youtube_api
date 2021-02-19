import {createActions, createReducer} from "reduxsauce";

const initialState = {
    video: {
        items:[]
    }
}

export const Action = createActions({
    updateState: ['props'],
    getVideo:['data']
}, {
    prefix: 'PHOTO/'
});

export default createReducer(initialState,{
    [Action.Types.UPDATE_STATE] : (state, {props}) => ({
        ...state,
        ...props
    })
});
