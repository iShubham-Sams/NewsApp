import React, { useEffect, useState } from 'react'

const Stories = () => {
    
    const[isLoding,setIsLoding]=useState(true)
    let API ="https://hn.algolia.com/api/v1/search?query=html"
    const fetchApiData= async ()=>{
        try {
            const res =await fetch(API)
            const data =await res.json()
            setIsLoding(false)
            console.log(data);
            
        } catch (error) {
            console.log(error);
        }
    }
    
    useEffect(()=>{
        fetchApiData()
    },[])
    
   
  return (<>
    {isLoding?<h1>Loding.....</h1>:<h1>data</h1>}
    
    
  </>
  )
}

export default Stories



