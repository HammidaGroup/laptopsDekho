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

  const url = window.location.href;

  // Native share
  if (navigator.share) {

    try {

      await navigator.share({
        title: "LaptopsDekho",
        text: "Check this laptop",
        url
      });

    } catch (err) {

      console.log(err);

    }

  } else {

    // fallback copy
    const textarea = document.createElement("textarea");

    textarea.value = url;

    document.body.appendChild(textarea);

    textarea.select();

    document.execCommand("copy");

    document.body.removeChild(textarea);

    alert("Link copied");

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