import React from 'react'
import "./post.css"

export default function Post(data) {
  return (
    <div className="postBox">
        <h2>{data.id}. {data.title}</h2>
        <p>{data.body}</p>
    </div>
  )
}
