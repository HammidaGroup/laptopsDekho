import React, { useContext } from 'react'
import './Header.css'
import laptopsDekhoLog from '/LaptopsDekhoLogo.webp'
import menu from "../assets/menu.png"
import { MenuLogicContext } from '../context/menuLogicContext'
import SellLaptop from './BtnCompo/SellLaptop'
import { useNavigate } from 'react-router-dom'
const Header = () => {
  const navigat = useNavigate()
    const menuConditionalState = useContext(MenuLogicContext);
    const logoHandler =()=>{
navigat("/")
    }
      return (
   <div className="header">
    <div className="headerL"><img  onClick={logoHandler} src={laptopsDekhoLog} alt="laptopsDekho" /></div>
    <div className="headerR">
      <SellLaptop/>
        <img onClick={() =>menuConditionalState.setMenuVisbleConditionalData(menuConditionalState.menuVisbleConditionalData == true ? false : true)
        } src={menu} alt="menu" />
    </div>
   </div>
  )
}

export default Header