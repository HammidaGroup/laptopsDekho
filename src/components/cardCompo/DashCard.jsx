import React, { useState } from 'react'
import editPng from "../../assets/edit.png"
import "./DashCard.css"
const DashCard = ({value , onDelete}) => {
//   console.log(value);
  
  return (
    <div className="dashCard">
       <div className="imgDiv">
         <img className='editBtn' src={editPng} alt="editBtn" />
        <img className='laptopImg' src={value.laptopImg[0]} alt="images" />
       </div>
    <div className="detailsDiv">
      <p>{value.brandName}</p>
      <p>{value.description}</p>
      <p>Price: ₹{value.laptopPrice}</p>

    </div>
    <div className="btnsDiv">
        <button onClick={() => onDelete(value._id)}>Delete</button>
        <button>Parmote</button>
    </div>
    </div>
  )
}

export default DashCard