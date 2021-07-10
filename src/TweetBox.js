import React, {useState} from 'react';
import "./TweetBox.css";
import { Avatar, Button } from "@material-ui/core";
import db from './firebase';

function TweetBox() {
    const [tweetMessage, setTweetMessage] =useState("");
    const [tweetImage, setTweetImage] =useState("");
    const sendTweet = e =>{
        e.preventDefault();
        db.collection('posts').add({
            displayName: 'Yun',
            username : 'Yunoo',
            verified: true,
            text: tweetMessage,
            image:tweetImage,
            avatar: "https://static.remove.bg/remove-bg-web/8be32deab801c5299982a503e82b025fee233bd0/assets/start-0e837dcc57769db2306d8d659f53555feb500b3c5d456879b9c843d1872e7baa.jpg"

        })
    }


    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                  <Avatar src="https://static.remove.bg/remove-bg-web/8be32deab801c5299982a503e82b025fee233bd0/assets/start-0e837dcc57769db2306d8d659f53555feb500b3c5d456879b9c843d1872e7baa.jpg"></Avatar>
                  <input 
                  onChange={(e)=> setTweetMessage(e.target.value)}
                  value={tweetMessage} placeholder="what's happening?" type="text"/>
                </div>
                <input value={tweetImage}
                onChange={(e) => setTweetImage(e.target.value)}
                 className="tweetBox__imageInput" placeholder="Enter image URL" type="text"/>
                <Button onClick={sendTweet} type="submit" className="tweetBox__tweetButton">Tweet</Button>


            </form>
            
        </div>
    )
}

export default TweetBox
