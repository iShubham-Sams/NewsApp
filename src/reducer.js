const reducer =(state,action)=>{
    switch(action.type){
        case "SET_LOADING":
        return {...state,
        isLoding:true
        }
        case "GET_STORIES":
        return {...state,
            hits:action.payload.hits,
            isLoding:false,
            nbPages:action.payload.nbPages
        }
    }
   return state
}

export default reducer