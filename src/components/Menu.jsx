import React, { useContext, useEffect, useState } from "react";
import "./Menu.css"
import homepng from "../assets/home.png";
import aboutmepng from "../assets/aboutMe.png";
import contactUspng from "../assets/contactUS.png";
import privacypng from "../assets/privacy-policy.png";
import addpng  from "../assets/add.png"

import deshboardpng from "../assets/dashboard.png"
import cartPng from "../assets/cart.png"
import { Link } from "react-router-dom";
import { MenuLogicContext } from "../context/menuLogicContext";

import JoinBtn from "./BtnCompo/JoinBtn";
import MenuProfile from "./BtnCompo/MenuProfile";

const Menu = () => {
    const menuConditionalState = useContext(MenuLogicContext);
    const [isLogin, setIsLogin] = useState(false)
let menu ;
// console.log(menuConditionalState.menuVisbleConditionalData);

useEffect(()=>{
    if (localStorage.getItem("token")) {
    setIsLogin(true)

    
}
},[])

if(menuConditionalState.menuVisbleConditionalData == true){
    menu = (
        <nav className="menu-box" >
                <h2>Menu</h2>
                <ul>
                  
                   <Link to="/">
                    <li>
                        <div>
                            
                            <img className="menu-btn" src={homepng} alt="Home Icon"/>
                                <span>Home</span>
                        </div>
                    </li>
                   </Link>
                         
                   <Link to="/AddBook">
                    <li>
                        <div>
                            
                            <img className="menu-btn" src={addpng} alt="Home Icon"/>
                                <span>Sell Book</span>
                        </div>
                    </li>
                   </Link>
                   <Link to="/cart">
                    <li>
                        <div>
                            
                            <img className="menu-btn" src={cartPng} alt="Home Icon"/>
                                <span>Cart</span>
                        </div>
                    </li>
                   </Link>
                   <Link to="/DashBoard">
                    <li>
                        <div>
                            
                            <img className="menu-btn" src={deshboardpng} alt="Home Icon"/>
                                <span>Dashboard</span>
                        </div>
                    </li>
                   </Link>
                         
                    <li>
                        <div>
                            <img className="menu-btn" src={contactUspng} alt="Contact Us Icon"/>
                                <span>Contact Us</span>
                        </div>
                    </li>
<Link to="/About">
                    <li>
                        <div>
                            <img className="menu-btn" src={aboutmepng} alt="Contact Us Icon"/>
                                <span>About Me</span>
                        </div>
                    </li>

</Link>
<Link to="/privacy-policy">
                    <li>
                        <div>
                            <img className="menu-btn" src={privacypng}alt="Privacy Policy Icon"/>
                                <span>Privacy Policy </span>
                        </div>
                    </li>
</Link>
                    <li >
                     {isLogin? <MenuProfile/>: <JoinBtn/>}
                    
                    </li>
                    

                </ul>
            </nav>
    )
    // setMenuVisibleContion(true)
}else{
    menu="";
    // setMenuVisibleContion(true)
}
    return (
        <>
         {menu}
            
        </>
    )
}
export default Menu;