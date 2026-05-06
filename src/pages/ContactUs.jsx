import React, { useContext, useEffect } from "react";
import { Helmet } from "react-helmet";
import "./ContactUs.css";
import Header from "../components/Header";
import Menu from "../components/Menu";
import { MenuLogicContext } from "../context/menuLogicContext";

const ContactUs = () => {
    // menu ko close krne k liye jab bhi  page open ho to menu close ho jaye
      const menuLogicContext = useContext(MenuLogicContext);
        useEffect(()=>{
          menuLogicContext.setisMenu(false)
        },[])
  return (
    <>
      <Helmet>

        {/* SEO */}
        <title>Contact Us | LaptopsDekho</title>

        <meta
          name="description"
          content="Contact LaptopsDekho for support, laptop listings, delivery assistance, and business inquiries across India."
        />

        <meta
          name="keywords"
          content="contact laptopsdekho, laptops support India, buy sell laptops contact"
        />

        <meta name="author" content="LaptopsDekho" />

        <link
          rel="canonical"
          href="https://laptopsdekho.xyz/contact-us"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />

        <meta
          property="og:title"
          content="Contact Us | LaptopsDekho"
        />

        <meta
          property="og:description"
          content="Get in touch with LaptopsDekho for support and inquiries."
        />

        <meta
          property="og:image"
          content="https://laptopsdekho.xyz/LaptopsDekhoLogo.webp"
        />

        <meta
          property="og:url"
          content="https://laptopsdekho.xyz/contact-us"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />

        <meta
          name="twitter:title"
          content="Contact Us | LaptopsDekho"
        />

        <meta
          name="twitter:description"
          content="Contact LaptopsDekho support team."
        />

        <meta
          name="twitter:image"
          content="https://laptopsdekho.xyz/LaptopsDekhoLogo.webp"
        />

      </Helmet>

<Header/>
      <div className="contact-container">
<Menu/>
        <div className="contact-hero">
          <h1>Contact Us</h1>
          <p>We are here to help you with laptop buying & selling.</p>
        </div>

        <div className="contact-card">

          <h2>Get In Touch</h2>

          <p>
            Have questions, delivery issues, or business inquiries?
            Feel free to contact the LaptopsDekho team.
          </p>

          <div className="contact-info">

            <div className="info-box">
              <h3>Email</h3>

              <a href="mailto:laptopsDekho.hg@gmail.com">
                laptopsDekho.hg@gmail.com
              </a>
            </div>

            <div className="info-box">
              <h3>Support</h3>

              <p>
                Available for listing support, delivery assistance,
                and general inquiries.
              </p>
            </div>

          </div>

        </div>

      </div>
    </>
  );
};

export default ContactUs;