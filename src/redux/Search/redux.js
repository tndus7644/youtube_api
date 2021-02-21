import {createActions, createReducer} from "reduxsauce";

const initialState = {　　
    searchResults: {
        items:[]
    }
}

export const Action = createActions({
    updateState: ['props'],
    searchVideo:['data']
}, {
    prefix: 'SEARCH/'
});

export default createReducer(initialState,{
    [Action.Types.UPDATE_STATE] : (state, {props}) => ({
        ...state,
        ...props
    })
});
