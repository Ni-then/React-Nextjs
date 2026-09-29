import React, { useEffect, useState } from 'react'
import { fetchPosts } from '../api/api'

const FetchOld = () => {
  const [posts,setPosts] = useState([])

  const getPosts = async() =>{
    try{
      const res = await fetchPosts()
      res.status === 200 ? setPosts(res.data) : [];
      
    }catch(err){
      console.log(err)
      return [];
    }

  }
  useEffect(()=>{
    getPosts()
  },[])
  return (
    <div>
      {posts.map(({ id, title, body }) => (
        <div key={id}>
          <p>{id}</p>
          <p>{title}</p>
          <p>{body}</p>
        </div>
      ))}
    </div>
  )
}

export default FetchOld