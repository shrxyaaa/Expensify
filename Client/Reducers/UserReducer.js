export const initailState= null

export const reducer=(state, action)=>{
    if(action.type==="STORE"){
        return action.payload
    }
    if(action.type==="CLEAR"){
        return null
    }
    if(action.type==="GROUPS"){
        return {
            ...state,
            user:{
            groups:action.payload,
            }

        }
    }

    if(action.type==="PROFILE"){
        return {
            ...state,
            bio:action.payload.bio,
            dp:action.payload.dp,

        }
    }
    return state
}