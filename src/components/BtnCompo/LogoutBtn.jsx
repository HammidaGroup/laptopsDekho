import React from 'react'
import logoutpng from "../../assets/logout.png"
const LogoutBtn = () => {
    const logoutHandler = ()=>{
        localStorage.removeItem("token")
        location.reload()
    }
  return (
   <>
    <div onClick={logoutHandler} >
                               <img className="menu-btn" src={logoutpng}alt="Logout Icon"/>
                                   <span style={{color:"red"}}>Logout</span>
                           </div>
   </>
  )
}

export default LogoutBtn