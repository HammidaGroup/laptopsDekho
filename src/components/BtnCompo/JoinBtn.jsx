import React from 'react'
import "./JoinBtn.css"
import { useNavigate } from 'react-router-dom'
const JoinBtn = () => {
    const navigate = useNavigate()
    
    const joinBtnHandler = () => {
       navigate("/join")
      };
  return (
    <button onClick={joinBtnHandler} className='joinBtn'>Join</button>
  )
}

export default JoinBtn