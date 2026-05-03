// import React from 'react'
import "./Adding.css"
import loading from "../../assets/loading.gif"
const Adding = () => {
  return (
    <div className="addingDiv">
        <h1>Adding</h1>
        <img src={loading} alt="Loading..." />
        <p>Adding new laptops...</p>
    </div>
  )
}

export default Adding