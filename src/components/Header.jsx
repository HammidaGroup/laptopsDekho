import React, { useContext } from 'react'
import './Header.css'
import laptopsDekhoLog from '../assets/LaptopsDekhoLogo.webp'
import menu from "../assets/menu.png"
import { MenuLogicContext } from '../context/menuLogicContext'
import SellLaptop from './BtnCompo/sellLaptop'
const Header = () => {
    const menuConditionalState = useContext(MenuLogicContext);
    
  return (
   <div className="header">
    <div className="headerL"><img src={laptopsDekhoLog} alt="laptopsDekho" /></div>
    <div className="headerR">
      <SellLaptop/>
        <img onClick={() =>menuConditionalState.setMenuVisbleConditionalData(menuConditionalState.menuVisbleConditionalData == true ? false : true)
        } src={menu} alt="menu" />
    </div>
   </div>
  )
}

export default Header