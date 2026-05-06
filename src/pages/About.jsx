import React, { useContext, useEffect } from "react";
import "./About.css";
import { Helmet } from "react-helmet";
import Header from "../components/Header";
import Menu from "../components/Menu";
import { MenuLogicContext } from "../context/menuLogicContext";

const About = () => {
    const menuLogicContext = useContext(MenuLogicContext);
      // menu ko close krne k liye jab bhi  page open ho to menu close ho jaye
      useEffect(()=>{
        menuLogicContext.setisMenu(false)
      },[])
  return (
    <>
     <Helmet>

  {/* Basic SEO */}
  <title>LaptopsDekho | Buy & Sell Used Laptops in India</title>

  <meta
    name="description"
    content="Buy and sell used laptops across India with LaptopsDekho. Safe delivery, trusted platform, and best prices for second-hand laptops."
  />

  <meta
    name="keywords"
    content="used laptops India, second hand laptop, buy laptop online India, sell laptop India, cheap laptops India"
  />

  <meta name="author" content="LaptopsDekho" />

  {/* Canonical */}
  <link rel="canonical" href="https://laptopsdekho.xyz/about" />

  {/* Open Graph (Facebook, WhatsApp, Instagram) */}
  <meta property="og:type" content="website" />
  <meta property="og:title" content="LaptopsDekho | Buy & Sell Used Laptops in India" />
  <meta
    property="og:description"
    content="India's trusted platform for buying and selling laptops with secure delivery and best deals."
  />
  <meta
    property="og:image"
    content="https://laptopsdekho.xyz/LaptopsDekhoLogo.webp"
  />
  <meta property="og:url" content="https://laptopsdekho.xyz/about" />
  <meta property="og:site_name" content="LaptopsDekho" />

  {/* Twitter Card */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="LaptopsDekho - Buy & Sell Laptops" />
  <meta
    name="twitter:description"
    content="Buy and sell laptops across India with safe delivery and best prices."
  />
  <meta
    name="twitter:image"
    content="https://laptopsdekho.xyz/assets/LaptopsDekhoLogo.webp"
  />

  {/* Mobile + Theme */}
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="theme-color" content="#4a7dff" />

</Helmet>
      <Header/>
      <Menu/>
    <div className="about-container">

      <div className="about-hero">
        <h1>About LaptopsDekho</h1>
        <p>Your trusted platform to buy and sell laptops across India</p>
      </div>

      <div className="about-section">
        <h2>What is LaptopsDekho?</h2>
        <p>
          LaptopsDekho is a platform that simplifies buying and selling laptops.
          We manage the complete process — from listing to delivery — so users
          get a smooth and secure experience.
        </p>
      </div>

      <div className="about-section">
        <h2>How We Work</h2>
        <p>
          Unlike traditional platforms, LaptopsDekho handles the entire flow.
          Once a laptop is listed and a buyer shows interest, we take care of
          communication, order confirmation, and delivery across India.
        </p>
      </div>

      <div className="about-section highlight">
        <h2>Our Delivery System</h2>
        <p>
          LaptopsDekho manages pickup, packaging guidance, and delivery through
          trusted courier partners. This ensures safe and reliable transactions
          for both buyers and sellers.
        </p>
      </div>

      <div className="about-section">
        <h2>Why Choose Us?</h2>
        <ul>
          <li>All India Delivery</li>
          <li>Simple Buying Process</li>
          <li>Trusted Platform</li>
          <li>Direct Platform Management</li>
        </ul>
      </div>

      <div className="about-section">
        <h2>Our Mission</h2>
        <p>
          To build India's most trusted laptop marketplace with transparency,
          safety, and convenience.
        </p>
      </div>

    </div>
    </>
  );
};

export default About;