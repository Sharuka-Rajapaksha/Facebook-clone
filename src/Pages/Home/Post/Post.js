import React from 'react'
import "./post.css"


export default function Post() {
  return (
    <div className="post">
      <div className="postContainer">
        <div className="postTop">
          <img src="/Images/2.jpg" alt="" className="postImage" />
          <span className="postUserName">Sharuka Rajapaksha</span>
          <span className="postTime">5 mins ago</span>
        </div>

        <div className="postCenter"></div>
        <div className="postBottom"></div>
      </div>
    </div>
  )
}
