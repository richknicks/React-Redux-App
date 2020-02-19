const initialState = {
     
        id:"",
        type:"",
        setup:"",
        punchline:""
    
};

export const reducer = (state = initialState, action)=>{
    console.log("I am the action from reducer", action)
    switch(action.type){
        case 'ADD':

        default: 
        return state
    }
}