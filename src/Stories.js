import React, { useEffect, useState } from 'react'
import { useGlobalContext } from './Context'

const Stories = () => {
    const {hits,isLoding}=useGlobalContext()
    if(isLoding){
        return(
            <>
                <h1>Loding....</h1>
            </>
        )
    }
    
  return (<>
   <h1>data</h1>
    {hits.map((curPost)=>{
        return <h2>{curPost.title}</h2>
    })}
    
  </>
  )
}

export default Stories



