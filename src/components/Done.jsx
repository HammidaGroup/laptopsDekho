import React from 'react'
import "./Done.css"
import doneGif from "../assets/done.gif"
const Done = () => {
  return (
   <div className="doneDiv">
    <img src={doneGif} alt="Done" />
    <h2>Thank you for your submission!</h2>
    <p>Your laptop has been successfully added to our platform.</p>
    <div className="btnsDiv">
        <button onClick={()=>window.location.href="/dashboard"}>View Dashboard</button>
        <button onClick={()=>window.location.href="/selllaptop"}>Add Another Laptop</button>
    </div>
   </div>
  )
}

export default Done