import React from 'react'
import "./addPost.css"
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import NotStartedIcon from '@mui/icons-material/NotStarted';
import Button from 'react-bootstrap/Button';

export default function AddPost() {
  return (
    <div className="addPost">
      <div className="addPostContainer">

        <div className="addPostTop">
          <img src="./Images/2.jpg" alt="" className="addPostPic" />
          <input placeholder='What is in your mind?' type="text" className="addPostInput" />
        </div>
      
      <hr className='postHr'/>

        <div className="addPostBottom">
          <div className="addPostOptions">
            
            <div className="addPostOption">
              <AddAPhotoIcon htmlColor='orange' className='addPhoto'/>
              <span className="addPostOptionText">Add Photo/Video</span>
            </div>
            <div className="addPostOption">
              <AddLocationAltIcon htmlColor='red' className='addPhoto'/>
              <span className="addPostOptionText">Add location</span>
            </div>
            <div className="addPostOption">
              <PersonAddIcon htmlColor='blue' className='addPhoto'/>
              <span className="addPostOptionText">Tag a person</span>
            </div>
            <div className="addPostOption">
              <NotStartedIcon htmlColor='Tomato' className='addPhoto'/>
              <span className="addPostOptionText">Go Live</span>
            </div>
          </div>
        </div>
        
        <div className="buttonBootStrap">
              <>
                <Button href="#">Post</Button> 
              </>
        </div>

      </div>
    </div>
  )
}
