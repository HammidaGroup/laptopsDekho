import React from 'react'
import { useNavigate } from 'react-router-dom'
import './SellLaptop.css'
const SellLaptop = () => {
    const navigate = useNavigate()
  return (
    <button className="sell-laptop-btn" onClick={()=> navigate('/sellLaptop')}>Sell Laptop</button>
  )
}

export default SellLaptop