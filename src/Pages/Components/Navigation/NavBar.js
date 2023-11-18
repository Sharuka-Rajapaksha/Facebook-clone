import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import MessageIcon from '@mui/icons-material/Message';
import SettingsIcon from '@mui/icons-material/Settings';
import "./navBar.css"

export default function NavBar() {
  return (
    <div className="navBarbox">
        
        <div className="navBarLeft">
            <span className="logo">Facebook</span>

        </div>

        <div className="navBarCanter">
            <div className="serarchBarBox">
                <SearchIcon className='searchIcon'/>
                <input placeholder='Search' className="searchInput" />
            </div>
        </div>
                
        <div className="navBarRight">
            <div className="navBarLinks">
                <span className="navBarLink1">HomePage</span>
                <span className="navBarLink2">Profile</span>
            </div>
            
            <div className="navBarIcons">
                <div className="navBarIcon">
                    <PersonIcon/>
                    <span className="iconTag">3</span>
                </div>
                <div className="navBarIcon">
                    <MessageIcon/>
                    <span className="iconTag">5</span>
                </div>
                <div className="navBarIcon">
                    <SettingsIcon/>
                    <span className="iconTag">4</span>
                </div>                
            </div>

            <div className="pic">
                <img src="images/1.jpg" alt="" className="profilePicImg" />
            </div>
        </div>


    </div>
  )
}
