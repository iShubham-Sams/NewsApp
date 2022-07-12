import React, { createContext, useContext, useReducer,useEffect } from 'react'
import reducer from './reducer';

let API ="https://hn.algolia.com/api/v1/search?"
const AppContext=createContext();
const initialState={
    isLoding:true,
    query:"html",
    nbPages:0,
    page:0,
    hits:[],
}

const AppProvider=({children})=>{
    const [state,dispatch]=useReducer(reducer,initialState)

   
    const fetchApiData= async (url)=>{
        dispatch({type:"SET_LOADING"})
        try {
            const res =await fetch(url)
            const data =await res.json()
            // console.log(data.hits);
            dispatch({
                type:"GET_STORIES",
                payload:{
                    hits:data.hits,
                    nbPages:data.nbPages
                }
            })
            
        } catch (error) {
            console.log(error);
        }
    }

    // to remove news
     const removePost=(post_ID)=>{
        dispatch ({
            type:"REMOVE_POST",payload: post_ID
        })
     }
    
    useEffect(()=>{
        fetchApiData(`${API}query=${state.query}&page=${state.page}`)
    },[])
    

  return ( <AppContext.Provider value={{...state,removePost}}>
        {children}
    </AppContext.Provider>)
}

const useGlobalContext=()=>{
return useContext(AppContext)
}

export {AppProvider,AppContext,useGlobalContext}