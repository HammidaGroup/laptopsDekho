import React from 'react'
import "./NotPropertyDash.css"
const NotPropertyDash = () => {
  return (
   <div className="notPropertyDash">
    <div className="notPropertyDashBox">
   <h2>Not Found Any Items / Laptops Please Add Laptop</h2>
   <div className="btnsDiv">
        <button onClick={() => window.location.href = "/sellLaptop"}>Add Laptop</button>
         <button onClick={() => window.location.href = "/"}>Go To Home</button>
   </div>
    </div>
   </div>
  )
}

export default NotPropertyDash