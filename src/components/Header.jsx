import React, { useContext } from 'react'
import './Header.css'
import laptopsDekhoLog from '../assets/LaptopsDekhoLogo.png'
import menu from "../assets/menu.png"
import { MenuLogicContext } from '../context/menuLogicContext'
const Header = () => {
    const menuConditionalState = useContext(MenuLogicContext);
    
  return (
   <div className="header">
    <div className="headerL"><img src={laptopsDekhoLog} alt="laptopsDekho" /></div>
    <div className="headerR">
        <img onClick={() =>menuConditionalState.setMenuVisbleConditionalData(menuConditionalState.menuVisbleConditionalData == true ? false : true)
        } src={menu} alt="menu" />
    </div>
   </div>
  )
}

export default Header