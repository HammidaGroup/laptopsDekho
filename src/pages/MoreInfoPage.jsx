import React, { useContext, useState } from "react";
import "./MoreInfoPage.css";
import Header from "../components/Header";
import Menu from "../components/Menu";
import { moreInfoContext } from "../context/MoreInfoContext";

const MoreInfoPage = () => {
  const { moreInfoData } = useContext(moreInfoContext);

  const [activeImg, setActiveImg] = useState(moreInfoData?.image);

  if (!moreInfoData) return <h2>Loading...</h2>;

  return (
    <div className="moreInfoPage">
      <Header />
      <Menu />

      <div className="contentDiv">

        {/* 🔥 LEFT SIDE (IMAGE) */}
        <div className="imgSection">

          <img src={activeImg} className="mainImg" />

          <div className="thumbs">
            {[moreInfoData.image, moreInfoData.image].map((img, i) => (
              <img
                key={i}
                src={img}
                onClick={() => setActiveImg(img)}
                className="thumb"
              />
            ))}
          </div>

        </div>

        {/* 🔥 RIGHT SIDE (DETAILS) */}
        <div className="detailsSection">

          <h2 className="name">{moreInfoData.name}</h2>

          <h1 className="price">₹{moreInfoData.price}</h1>

          <p className="desc">{moreInfoData.description}</p>

          <div className="badges">
            <span>✅ Verified</span>
            <span>🔒 Safe Deal</span>
            <span>📍 {moreInfoData.location}</span>
          </div>

          {/* 🔥 SPECS */}
          <div className="specGrid">
            <div><b>RAM</b><br />{moreInfoData.specs?.ram}</div>
            <div><b>Processor</b><br />{moreInfoData.specs?.processor}</div>
            <div><b>Storage</b><br />{moreInfoData.specs?.storage}</div>
            <div><b>Screen</b><br />{moreInfoData.specs?.screenSize}</div>
          </div>

          {/* 🔥 RETURN */}
          <p className="return">{moreInfoData.return}</p>

          {/* 🔥 BUTTON */}
          <button className="contactBtn">Contact Seller</button>

        </div>
      </div>
    </div>
  );
};

export default MoreInfoPage;