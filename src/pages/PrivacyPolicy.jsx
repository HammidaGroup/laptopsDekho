import React, { useContext, useEffect } from "react";
import { Helmet } from "react-helmet";
import "./PrivacyPolicy.css";
import Header from "../components/Header";
import Menu from "../components/Menu";
import { MenuLogicContext } from "../context/menuLogicContext";

const PrivacyPolicy = () => {
      const menuLogicContext = useContext(MenuLogicContext);
        // menu ko close krne k liye jab bhi  page open ho to menu close ho jaye
        useEffect(()=>{
          menuLogicContext.setisMenu(false)
        },[])
  return (
    <>
      <Helmet>

        {/* SEO */}
        <title>Privacy Policy | LaptopsDekho</title>

        <meta
          name="description"
          content="Read the Privacy Policy of LaptopsDekho to understand how we collect, use, and protect user information while providing laptop buying and selling services across India."
        />

        <meta
          name="keywords"
          content="LaptopsDekho privacy policy, used laptops India, buy and sell laptops, user privacy"
        />

        <meta name="author" content="LaptopsDekho" />

        <link
          rel="canonical"
          href="https://laptopsdekho.xyz/privacy-policy"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />

        <meta
          property="og:title"
          content="Privacy Policy | LaptopsDekho"
        />

        <meta
          property="og:description"
          content="Learn how LaptopsDekho collects and protects your information while using our platform."
        />

        <meta
          property="og:image"
          content="https://laptopsdekho.xyz/LaptopsDekhoLogo.webp"
        />

        <meta
          property="og:url"
          content="https://laptopsdekho.xyz/privacy-policy"
        />

        <meta property="og:site_name" content="LaptopsDekho" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />

        <meta
          name="twitter:title"
          content="Privacy Policy | LaptopsDekho"
        />

        <meta
          name="twitter:description"
          content="Read the Privacy Policy of LaptopsDekho."
        />

        <meta
          name="twitter:image"
          content="https://laptopsdekho.xyz/LaptopsDekhoLogo.webp"
        />

        <meta name="theme-color" content="#4a7dff" />

      </Helmet>

        <Header/>
        <Menu/>
      <div className="privacy-container">

        <div className="privacy-hero">
          <h1>Privacy Policy</h1>
          <p>Your privacy and trust are important to us.</p>
        </div>

        <div className="privacy-section">
          <h2>Introduction</h2>

          <p>
            LaptopsDekho respects your privacy and is committed to protecting
            your personal information. This Privacy Policy explains how we
            collect, use, and safeguard user data when using our platform.
          </p>
        </div>

        <div className="privacy-section">
          <h2>Information We Collect</h2>

          <p>
            We may collect information such as your name, phone number, email
            address, location, and product details when you use our platform.
          </p>
        </div>

        <div className="privacy-section">
          <h2>How We Use Information</h2>

          <ul>
            <li>To manage laptop listings</li>
            <li>To coordinate delivery and orders</li>
            <li>To improve platform experience</li>
            <li>To provide customer support</li>
          </ul>
        </div>

        <div className="privacy-section highlight">
          <h2>Data Protection</h2>

          <p>
            We take reasonable steps to protect user information from
            unauthorized access, misuse, or disclosure.
          </p>
        </div>

        <div className="privacy-section">
          <h2>Third-Party Services</h2>

          <p>
            LaptopsDekho may use trusted third-party services such as delivery
            partners, hosting providers, and analytics tools to operate the
            platform efficiently.
          </p>
        </div>

        <div className="privacy-section">
          <h2>Cookies</h2>

          <p>
            Our website may use cookies to improve user experience and analyze
            website traffic.
          </p>
        </div>

        <div className="privacy-section">
          <h2>Policy Updates</h2>

          <p>
            We may update this Privacy Policy from time to time. Changes will
            be reflected on this page.
          </p>
        </div>

        <div className="privacy-section">
          <h2>Contact Us</h2>

          <p>
            If you have questions regarding this Privacy Policy, you can contact
            us through the official LaptopsDekho platform.
          </p>
        </div>

      </div>
    </>
  );
};

export default PrivacyPolicy;