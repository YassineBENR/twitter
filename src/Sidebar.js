import React from 'react';
import './Sidebar.css';
import TwitterIcon from '@material-ui/icons/Twitter';
import SidebarOption from './SidebarOption';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import ReorderIcon from '@material-ui/icons/Reorder';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { Button } from "@material-ui/core";


function Sidebar() {
    return (
        <div className="sidebar">
             {/* twitterIcon*/}
         <TwitterIcon className="sidebar__twitterIcon" />

         <SidebarOption active Icon={HomeOutlinedIcon} text="Home"/>
         <SidebarOption Icon={SearchIcon} text="Explore"/>
         <SidebarOption Icon={NotificationsNoneIcon} text="Notifications"/>
         <SidebarOption Icon={MailOutlineIcon} text="Messages"/>
         <SidebarOption Icon={BookmarkBorderIcon} text="Bookmarks"/>
         <SidebarOption Icon={ReorderIcon} text="Lists"/>
         <SidebarOption Icon={PersonOutlineIcon} text="Profile"/>
         <SidebarOption Icon={MoreHorizIcon} text="More"/>
       

       {/* sidebaroption*/}
        {/* sidebaroption*/}
         {/* sidebaroption*/}
          {/* sidebaroption*/}
           {/* sidebaroption*/}
            {/* sidebaroption*/}


             {/* tweet button*/}
             <Button variant="outlined" className="sidebar__tweet" fullWidth>Tweet</Button>
        
        </div>
    )
}

export default Sidebar
