import React, { useEffect } from 'react'

const Stories = () => {
    let API ="https://hn.algolia.com/api/v1/search?query=html"
    const fetchApiData= async ()=>{
        try {
            const res =await fetch(API)
            const data =await res.json()
            console.log(data);
            
        } catch (error) {
            console.log(error);
        }
    }
    
    useEffect(()=>{
        fetchApiData()
    },[])

   
  return (<>
    <h2>My Tech News Post</h2>
  </>
  )
}

export default Stories



