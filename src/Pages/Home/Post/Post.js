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

        <div className="postCenter">
          <div className="postCaption"> Write your caption here</div>
          <img src="/Images/2.jpg" alt="" className="postedImage" />
        </div>

        <div className="postBottom">
          <div className="postBottomLeft">
            <img src="Images/2.jpg" alt="" className="reactionPic" />
            <img src="Images/2.jpg" alt="" className="reactionPic" />
            <img src="Images/2.jpg" alt="" className="reactionPic" />
            <span className="likeCount">Code and 245 others</span>
          </div>
          <div className="postBottomRight">
            <span className="commentCount">15 comments</span>
          </div>
        </div>

      </div>
    </div>
  )
}
