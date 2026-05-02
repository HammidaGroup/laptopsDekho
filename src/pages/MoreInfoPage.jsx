import React, { useContext, useEffect, useState } from "react";
import "./MoreInfoPage.css";
import Header from "../components/Header";
import Menu from "../components/Menu";
import { moreInfoContext } from "../context/MoreInfoContext";
import { useSearchParams } from "react-router-dom";
import axios from "axios";

const MoreInfoPage = () => {
  const { moreInfoData } = useContext(moreInfoContext);
  const [moreInfoDataBackend, setMoreInfoDataBackend] = useState([]);
  const [activeImg, setActiveImg] = useState(null);

  const [params] = useSearchParams();
  const id = params.get("id");

  // 🔥 FETCH DATA
  useEffect(() => {
    if (!id) return;

    axios
      .post("https://laptopsdekho-backend.onrender.com/api/get/moreInfo", { id })
      .then((res) => setMoreInfoDataBackend(res.data))
      .catch((err) => console.log("Error:", err));
  }, [id]);

  // 🔥 SET ACTIVE IMAGE
  useEffect(() => {
    if (moreInfoData?.images?.[0]) {
      setActiveImg(moreInfoData.images[0]);
    } else if (moreInfoDataBackend?.laptopsImages?.[0]) {
      setActiveImg(moreInfoDataBackend.laptopsImages[0]);
    }
  }, [moreInfoData, moreInfoDataBackend]);

  // 🔥 MERGED DATA
  const data = moreInfoData || moreInfoDataBackend;
  // console.log(moreInfoDataBackend);
  
 
  

  // 🔥 IMAGES ARRAY SAFE
  const images =
    moreInfoData?.images ||
    moreInfoDataBackend?.laptopsImages ||
    [];

  // 🔥 LOADING
  if (!data) return <h2 style={{ textAlign: "center" }}>Loading...</h2>;

  // 🔥 CONTACT HANDLER
  const contactHandler = () => {
    const phoneNo = data.phoneNo;
    if (!phoneNo) return alert("Phone number not available");

    window.open(`https://wa.me/${phoneNo}`, "_blank");
  };

  return (
    <div className="moreInfoPage">
      <Header />
      <Menu />

      <div className="contentDiv">

        {/* LEFT */}
        <div className="imgSection">

          <img src={activeImg} className="mainImg" alt="laptop" />

          <div className="thumbs">
            {images.map((img, i) => (
              <img
                key={i}
                src={img}
                onClick={() => setActiveImg(img)}
                className="thumb"
                alt="thumb"
              />
            ))}
          </div>

        </div>

        {/* RIGHT */}
        <div className="detailsSection">

          <h2 className="name">
            {data.name || moreInfoDataBackend.brandName}
          </h2>

          <h1 className="price">
            ₹{data.price || moreInfoDataBackend.laptopPrice}
          </h1>

          <p className="desc">
            {data.description || moreInfoDataBackend.laptopDesc}
          </p>

          <div className="badges">
            <span>✅ Verified</span>
            <span>🔒 Safe Deal</span>
            <span>📍 {data.location || moreInfoDataBackend.laptopAddress}</span>
          </div>

          {/* SPECS */}
          <div className="specGrid">
            <div>
              <b>RAM</b><br />
              {data.ram || moreInfoDataBackend.laptopRam}
            </div>
            <div>
              <b>Processor</b><br />
              {data.processor || moreInfoDataBackend.laptopProcessor}
            </div>
            <div>
              <b>Storage</b><br />
              {data.storage || moreInfoDataBackend.laptopStorage}
            </div>
          </div>

          {/* BUTTON */}
          <button className="contactBtn" onClick={contactHandler}>
            Contact Seller
          </button>

        </div>
      </div>
    </div>
  );
};

export default MoreInfoPage;