import { FETCH_JOKES_START, FETCH_JOKES_SUCCESS, FETCH_JOKES_FAIL } from '../action/index';



const initialState = {
     
    
   jokes:[]
     
};

export const reducer = (state = initialState, action)=>{
    console.log("I am the action from reducer", action)
    switch(action.type){
        case FETCH_JOKES_START:
        return {
            ...state,
            isFetching: true,
            error:''
        };
        case FETCH_JOKES_SUCCESS:
            return{
                ...state,
                jokes: action.payload,
                isFetching: false,
                error:''
            };
        case FETCH_JOKES_FAIL:
            return {
                ...state,
                error: action.payload
            }
        default: 
        return state
    }
}