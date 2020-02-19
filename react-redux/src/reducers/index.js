import { FETCH_JOKES_START, FETCH_JOKES_SUCCESS, FETCH_JOKES_FAIL } from '../action/index';



const initialState = {
     
    
    setup: null,
    punchline: null
    
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
                setup: action.payload,
                punchline: action.payload,
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