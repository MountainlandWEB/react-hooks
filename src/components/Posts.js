import React, { useState, useEffect } from 'react'

const Posts = () => {
  const [posts, setPosts] = useState([])
  
  useEffect(() => {
    async function fetchPosts() {
      let response = await fetch('https://jsonplaceholder.typicode.com/posts')
      let data = await response.json()
      setPosts(data)
    }
    fetchPosts()
  }, [])
  
  function renderPosts() {
    return posts.map(post => {
      return <div className="item" key={post.id}>{post.title}</div>
    })
  }
  return (
    <div className="ui list">
      <div>Posts: </div>
      { renderPosts() }
    </div>
  )
}

export default Posts