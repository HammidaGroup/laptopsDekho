import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Menu from "../components/Menu";
import Card from "../components/Card";
import "./FavoritePage.css";

const FavoritePage = () => {

  const [favorites, setFavorites] = useState([]);

  useEffect(() => {

    let data = [];

    try {

      data =
        JSON.parse(localStorage.getItem("favoriteItems")) || [];

      setFavorites(data);

    } catch (err) {

      data = [];

    }

  }, []);

  // 🔥 chunk logic
  const chunkArray = (arr, size) => {

    const result = [];

    for (let i = 0; i < arr.length; i += size) {

      result.push(arr.slice(i, i + size));

    }

    return result;

  };

  return (
    <>

      <Menu />

      <Header />
      <div className="favoritePage">

        <h1 className="favoriteHeading">
          Favorite Laptops ❤️
        </h1>

        {
          favorites.length === 0 ?

            <div className="emptyFavorite">
              <p>No favorite laptops yet</p>
            </div>

            :

            chunkArray(favorites, 2).map((group, index) => (

              <div
                className="card-cont"
                key={index}
              >

                {
                  group.map((data, i) => (

                    <Card
                      key={i}
                      value={data}
                    />

                  ))
                }

              </div>

            ))
        }

      </div>

    </>
  )
}

export default FavoritePage;