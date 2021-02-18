import {createActions, createReducer} from "reduxsauce";

const initialState = {

}

export const Action = createActions({

}, {
    prefix:'VIDEO/'
})

export default createReducer(initialState,{

})
