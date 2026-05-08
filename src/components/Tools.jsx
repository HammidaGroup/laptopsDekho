import React, { useEffect, useState } from 'react'
import "./Tools.css";
import sendImg from "../assets/send.png";
import blackHeartPng from "../assets/black-heart.png";
import redHeartPng from "../assets/red-heart.png";
import { useNavigate } from 'react-router-dom';
const Tools = ({value}) => {
      //laptop listed time dikhaen ke liye ye logic 
      const navigator = useNavigate()
 const [listed, setListed] = useState("");

useEffect(() => {

  const oldTime = new Date(value);
  const now = new Date();

  const diff = now - oldTime;

  const minutes = Math.floor(diff / (1000 * 60));
  const hours = Math.floor(diff / (1000 * 60 * 60));
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));

  if (days > 0) {
    setListed(days + " day ago");
  } 
  else if (hours > 0) {
    setListed(hours + " hour ago");
  } 
  else {
    setListed(minutes + " min ago");
  }

}, []);

const shareHandler = async () => {

  const shareData = {
    title: "LaptopsDekho",
    text: "Check this laptop",
    url: window.location.href
  };

  // Native Share
  if (navigator.share) {

    try {

      await navigator.share(shareData);

    } catch (err) {

      console.log(err);

    }

  } else {

    // Fallback Copy
    try {

      await navigator.clipboard.writeText(window.location.href);

      alert("Link copied");

    } catch (err) {

      console.log(err);

    }

  }

};
  return (
   <div className="toolsDiv">
               <div className="toolDiv">
                 <img src={blackHeartPng} alt="sendPng" />
                 <p>Favorite</p>
               </div>
               <div className="toolDiv">
                 <img onClick={shareHandler} src={sendImg} alt="sendPng" />
                 <p>send</p>
               </div>
               <div className="toolDiv">
                 <p>{listed}</p>
               </div>
              </div>
  )
}

export default Tools