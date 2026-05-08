import React, { useEffect, useState } from 'react'
import "./Tools.css";
import sendImg from "../assets/send.png";
import blackHeartPng from "../assets/black-heart.png";
import redHeartPng from "../assets/red-heart.png";

const Tools = ({ value }) => {
// console.log(value)
  const [listed, setListed] = useState("");
  const [isFavorite, setIsFavorite] = useState(false);

  // 🔥 check favorite on load
useEffect(() => {
// localStorage.clear()
  let favorites = [];

  try {

    favorites =
      JSON.parse(localStorage.getItem("favoriteItems")) || [];

  } catch (err) {

    favorites = [];

  }

  const alreadyExist =
    favorites.find((item) => item.id === value.id);

  if (alreadyExist) {
    setIsFavorite(true);
  }

}, [value]);
  // 🔥 favorite handler
const favoriteHandler = () => {

  // old data
  let favorites = [];

  try {

    favorites =
      JSON.parse(localStorage.getItem("favoriteItems")) || [];

  } catch (err) {

    favorites = [];

  }

  // item
  const favoriteItem = {
    id: value.id,
    name: value.name,
    price: value.price,
    images: value.images,
    listed: value.listed,
    location: value.location,
    processor: value.processor,
    ram: value.ram,
    storage: value.storage,
    description: value.description
  };

  // already exist ?
  const alreadyExist =
    favorites.find((item) => item.id === value.id);

  if (alreadyExist) {

    // remove
    favorites =
      favorites.filter((item) => item.id !== value.id);

    setIsFavorite(false);

  } else {

    // add
    favorites.push(favoriteItem);

    setIsFavorite(true);

  }

  // save all data
  localStorage.setItem(
    "favoriteItems",
    JSON.stringify(favorites)
  );

};
  // listed time
  useEffect(() => {

    const oldTime = new Date(value.createdAt);
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

  }, [value]);

  // share
  const shareHandler = async () => {

    const url = window.location.href;

    if (navigator.share) {

      try {

        await navigator.share({
          title: value.laptopName,
          text: "Check this laptop",
          url
        });

      } catch (err) {

        console.log(err);

      }

    } else {

      navigator.clipboard.writeText(url);

      alert("Link copied");

    }

  };

  return (
    <div className="toolsDiv">

      <div className="toolDiv">
        <img
          onClick={favoriteHandler}
          src={isFavorite ? redHeartPng : blackHeartPng}
          alt="heart"
        />
        <p>Favorite</p>
      </div>

      <div className="toolDiv">
        <img
          onClick={shareHandler}
          src={sendImg}
          alt="send"
        />
        <p>Share</p>
      </div>

      <div className="toolDiv">
        <p>{listed}</p>
      </div>

    </div>
  )
}

export default Tools;