import React from 'react'
import "./leftPane.css"
import SmartDisplayIcon from '@mui/icons-material/SmartDisplay';
import EventIcon from '@mui/icons-material/Event';
import GroupIcon from '@mui/icons-material/Group';

import FeedIcon from '@mui/icons-material/Feed';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import BuildCircleIcon from '@mui/icons-material/BuildCircle';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Form from 'react-bootstrap/Form';

export default function LeftPane() {
  return (
    <div className="leftPaneBox">
        <div className="leftPaneContainer">
            <div className="leftPaneMenu">
                <li className="leftPaneMenuItem">
                    <SmartDisplayIcon htmlColor='blue' className='LeftPageMenuIcon'/>
                    <span className="leftPaneMenuText">Watch</span>
                </li>
                <li className="leftPaneMenuItem">
                    <EventIcon htmlColor='red' className='LeftPageMenuIcon'/>
                    <span className="leftPaneMenuText">Events</span>
                </li>
                <li className="leftPaneMenuItem">
                    <GroupIcon htmlColor='blue' className='LeftPageMenuIcon'/>
                    <span className="leftPaneMenuText">Friends</span>
                </li>
                <li className="leftPaneMenuItem">
                    <CalendarMonthIcon className='LeftPageMenuIcon'/>
                    <span className="leftPaneMenuText">Events</span>
                </li>
                <li className="leftPaneMenuItem">
                    <BuildCircleIcon className='LeftPageMenuIcon'/>
                    <span className="leftPaneMenuText">Settings </span>
                </li>
                <li className="leftPaneMenuItem">
                    <SportsEsportsIcon className='LeftPageMenuIcon'/>
                    <span className="leftPaneMenuText">Games</span>
                </li>
                <li className="leftPaneMenuItem">
                    <NewspaperIcon className='LeftPageMenuIcon'/>
                    <span className="leftPaneMenuText">News </span>
                </li>
                <li className="leftPaneMenuItem">
                    <FitnessCenterIcon className='LeftPageMenuIcon'/>
                    <span className="leftPaneMenuText">Jobs</span>
                </li>
                <li className="leftPaneMenuItem">
                    <AddShoppingCartIcon className='LeftPageMenuIcon'/>
                    <span className="leftPaneMenuText">Market</span>
                </li>
                <hr/>
                
                <div className="pagesYouLiked">
                    <h3>Liked Pages</h3>
                </div>
                
                <div className="pageList">

                <Form.Select size="sm">
                    <option>Pick category from here</option>
                    <option value="1">Sports</option>
                    <option value="2">Life Style</option>
                    <option value="3">Games</option>
                    <option value="4">News</option>
                    <option value="5">Travel</option>
                    <option value="6">Learning</option>
                </Form.Select>

                <li className="pageListItem">
                    <img src="./Images/1.jpg" alt="" className="pagePic" />
                    <span className="pageName">React</span>
                </li>
                <li className="pageListItem">
                    <img src="./Images/1.jpg" alt="" className="pagePic" />
                    <span className="pageName">React BootStrap</span>
                </li>
                <li className="pageListItem">
                    <img src="./Images/1.jpg" alt="" className="pagePic" />
                    <span className="pageName">JavaScript</span>
                </li>
                <li className="pageListItem">
                    <img src="./Images/1.jpg" alt="" className="pagePic" />
                    <span className="pageName">Football</span>
                </li>
                <li className="pageListItem">
                    <img src="./Images/1.jpg" alt="" className="pagePic" />
                    <span className="pageName">Cricket 360</span>
                </li>
                <li className="pageListItem">
                    <img src="./Images/1.jpg" alt="" className="pagePic" />
                    <span className="pageName">Swimming Highlights</span>
                </li>
                <li className="pageListItem">
                    <img src="./Images/1.jpg" alt="" className="pagePic" />
                    <span className="pageName">Movie Theater</span>
                </li>
                <li className="pageListItem">
                    <img src="./Images/1.jpg" alt="" className="pagePic" />
                    <span className="pageName">Enjoys</span>
                </li>
                </div>


            </div>
        </div>
    </div>
  )
}
