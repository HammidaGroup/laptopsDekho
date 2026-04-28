import React, { useContext, useState } from "react";
import "./MoreInfoPage.css";
import Header from "../components/Header";
import Menu from "../components/Menu";
import { moreInfoContext } from "../context/MoreInfoContext";

const MoreInfoPage = () => {
  const { moreInfoData } = useContext(moreInfoContext);
// console.log(moreInfoData);

  // 🔥 first image set
  const [activeImg, setActiveImg] = useState(moreInfoData?.images?.[0]);

  if (!moreInfoData) return <h2>Loading...</h2>;

  return (
    <div className="moreInfoPage">
      <Header />
      <Menu />

      <div className="contentDiv">

        {/* LEFT */}
        <div className="imgSection">

          <img src={activeImg} className="mainImg" />

          <div className="thumbs">
            {moreInfoData.images?.map((img, i) => (
              <img
                key={i}
                src={img}
                onClick={() => setActiveImg(img)}
                className="thumb"
              />
            ))}
          </div>

        </div>

        {/* RIGHT */}
        <div className="detailsSection">

          <h2 className="name">{moreInfoData.name}</h2>

          <h1 className="price">₹{moreInfoData.price}</h1>

          <p className="desc">{moreInfoData.description}</p>

          <div className="badges">
            <span>✅ Verified</span>
            <span>🔒 Safe Deal</span>
            <span>📍 {moreInfoData.location}</span>
          </div>

          {/* SPECS */}
          <div className="specGrid">
            <div><b>RAM</b><br />{moreInfoData.ram}</div>
            <div><b>Processor</b><br />{moreInfoData.processor}</div>
            <div><b>Storage</b><br />{moreInfoData.storage}</div>
            {/* <div><b>Condition</b><br />{moreInfoData.condition}</div> */}
          </div>

          {/* BUTTON */}
          <button className="contactBtn">Contact Seller</button>

        </div>
      </div>
    </div>
  );
};

export default MoreInfoPage;