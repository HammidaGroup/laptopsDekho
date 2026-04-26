import React, { useEffect, useRef, useState } from 'react'
import "./MenuProfile.css"
import LogoutBtn from './LogoutBtn'
import cutPng from "../../assets/cut.png"
import morePng from "../../assets/more.png"
const MenuProfile = () => {
 const moreBtnRef = useRef()
const formData = new FormData()
const [token, setToken] = useState(localStorage.getItem("token"))
const [profileData, setProfileData] = useState([])

const [info, setInfo] = useState()
 
formData.append("token",token)
 
useEffect(()=>{
   const getProfileData= async ()=>{
     const response  = await fetch("https://bookplace-backend.onrender.com/api/data/menuProfile",{
        method:"POST",
        body:formData
    })
    const data = await response.json()
    // console.log(data.menuProfileData[0]);
    setProfileData(data.menuProfileData[0])
    
   }
   getProfileData()
},[])

const onCut =()=>{
  setInfo(<></>)
  moreBtnRef.current.style.visibility="visible"
}
const profileClickHandler = ()=>{
setInfo(<>
  { <div className="menuProfileInfo-div">
        <img  onClick={onCut} className='cutBtn' src={cutPng} alt="cut btn" />
           <h3>{profileData.email}</h3>
           <LogoutBtn/>
        </div>}
</>)

moreBtnRef.current.style.visibility="hidden"


}
  return (
    <>
    <div className="menuProfile-div">
     {info}
        <div className="left">
            <img className='profileImg' src={profileData.image} alt="profile Image" />
        </div>
        <div className="right">
            <h3>{profileData.firstName}</h3>
            <img ref={moreBtnRef} onClick={profileClickHandler} className='moreBtn' src={morePng} alt="morebtn" />
        </div>
    </div>
    </>
  )
}

export default MenuProfile