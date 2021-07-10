import React from 'react';
import './Widgets.css';
import {
    TwitterTimelineEmbed,
    TwitterShareButton,
    TwitterTweetEmbed,
} from "react-twitter-embed";
import SearchIcon from '@material-ui/icons/Search';

function Widgets() {
    return (
        <div className="widgets">
            <div className="widgets__input">
              <SearchIcon className="widgets__searchIcon" />
              <input placeholder="Search Twitter" type="text" />
            </div>
         <div className="widgets__widgetContainer">
             <h2>what's happening?</h2>

             <TwitterTweetEmbed tweetId={"1412794268003885058"} />

             <TwitterTimelineEmbed
             sourceType="profile"
             screenName="who"
             options={{height:400}}
             />

           
         </div>
        </div>
    )
}

export default Widgets
