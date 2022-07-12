import React, { useEffect, useState } from 'react'
import { useGlobalContext } from './Context'

const Stories = () => {
    const {hits,isLoding,removePost}=useGlobalContext()
    if(isLoding){
        return(
            <>
                <h1>Loding....</h1>
            </>
        )
    }
    
  return (<>
   <div className="stories-div" >
    {hits.map((curPost)=>{
        const {title,author,objectID,url,num_comments}=curPost;
        return (
            <>
            <div className="card" key={objectID}>
                <h2>{title}</h2>
                <p>
                    By <span>{author}</span> | <span> {num_comments} </span> Comments
                </p>
                <div className="card-button">
                    <a href={url} target="_blank">
                        Read More
                    </a>
                    <a href="#" onClick={()=>removePost(objectID)}> Remove</a>
                </div>
            </div>
            </>
        )
        
    })}
    </div>
  </>
  )
}

export default Stories



