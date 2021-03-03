import {createActions, createReducer} from "reduxsauce";

const initialState = {　
    hasMore:true,
    isLoading: false,　
    searchResults: {
        items:[]
    },
}

export const Action = createActions({
    updateState: ['props'],
    searchVideo:['data'],
    searchVideoMore:['data'],
}, {
    prefix: 'SEARCH/'
});

export default createReducer(initialState,{
    [Action.Types.UPDATE_STATE] : (state, {props}) => ({
        ...state,
        ...props
    })
});
