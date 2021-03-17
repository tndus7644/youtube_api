import {createActions, createReducer} from "reduxsauce";

const initialState = {
    comments:{
        items:[
            {
                snippet:{},
                replies:{}
            }
        ]
    }
}

export const Action = createActions({
    updateState: ['props'],
    commentsList:['data']
}, {
    prefix: 'COMMENTS/'
});

export default createReducer(initialState,{
    [Action.Types.UPDATE_STATE] : (state, {props}) => ({
        ...state,
        ...props
    })
});
