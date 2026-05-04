import React, { useState } from 'react'
import editPng from "../../assets/edit.png"
import "./DashCard.css"
const DashCard = ({value}) => {
//   console.log(value);
  
  return (
    <div className="dashCard">
        <img className='editBtn' src={editPng} alt="editBtn" />
        <img src={value.image} alt="images" />
    <p>{value.name}</p>
    <div className="btnsDiv">
        <button>Delete</button>
        <button>Parmote</button>
    </div>
    </div>
  )
}

export default DashCard