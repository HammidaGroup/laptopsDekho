import React from "react";
import "./About.css";
import { Helmet } from "react-helmet";
import Header from "../components/Header";
import Menu from "../components/Menu";

const About = () => {
  return (
    <>
     <Helmet>
        <title>About LaptopsDekho | Buy & Sell Used Laptops in India</title>

        <meta
          name="description"
          content="LaptopsDekho is India's trusted platform to buy and sell second-hand laptops. We provide verified listings, best prices, and all India delivery."
        />

        <meta
          name="keywords"
          content="used laptops India, buy laptop online, sell laptop India, second hand laptop marketplace"
        />

        {/* Open Graph */}
        <meta property="og:title" content="About LaptopsDekho" />
        <meta
          property="og:description"
          content="Buy & sell laptops across India with trust and easy delivery."
        />
        <meta property="og:image" content="/LaptopsDekhoLogo.webp" />
        <meta property="og:url" content="https://laptopsdekho.xyz/about" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
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