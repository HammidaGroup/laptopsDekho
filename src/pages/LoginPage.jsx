import React, { useContext, useEffect } from "react";
import "./LoginPage.css";
import laptopsDekhoLogo from "/LaptopsDekhoIcon.webp";
import Header from "../components/Header";
import Menu from "../components/Menu";
import { MenuLogicContext } from "../context/menuLogicContext";
const LoginPage = () => {
  // menu ko close krne k liye jab bhi  page open ho to menu close ho jaye
   const menuLogicContext = useContext(MenuLogicContext);
    useEffect(()=>{
      menuLogicContext.setisMenu(false)
    },[])
  return (
    <div className="login-container">
        <Header/>
        <Menu/>
      <div className="login-box">
        <div className="h2-imgIcon">
        <img src={laptopsDekhoLogo} alt="LaptopsDekho Logo" />
        <h2>Laptops</h2>

        </div>
        
        <p>Sell your laptop easily & safely</p>

        <button className="google-btn" onClick={()=>location.href="https://laptopsDekho-backend.onrender.com/auth/google"}>
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="google"
          />
          Continue with Google
        </button>

        <p className="small-text">
          By continuing, you agree to our Terms & Privacy Policy
        </p>
      </div>
    </div>
  );
};

export default LoginPage;