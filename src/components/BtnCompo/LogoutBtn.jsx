import React from 'react'
import "./LogoutBtn.css"
import logoutpng from "../../assets/logout.png"
const LogoutBtn = () => {
    const logoutHandler = ()=>{
        localStorage.removeItem("token")
        location.reload()
    }
  return (
   <>
    <div className='logoutDiv' onClick={logoutHandler} >
                               <img className="menu-btn" src={logoutpng}alt="Logout Icon"/>
                                   <span style={{color:"red"}}>Logout</span>
                           </div>
   </>
  )
}

export default LogoutBtn