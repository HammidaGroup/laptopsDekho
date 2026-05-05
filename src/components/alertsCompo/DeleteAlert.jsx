import React, { useContext } from 'react'
import "./DeleteAlert.css"
import { GlobleContext } from '../../context/GlobleContext'
const DeleteAlert = () => {
    

    const {deleteContextAlert, setDeleteContextAlert} = useContext(GlobleContext)
  
  return (
  <div className="deleteAlert">
    <div className="alertBox">

    <h2>Are you sure you want to delete this laptop?</h2>
    <div className="btnsDiv">
        <button onClick={() => setDeleteContextAlert(true)}>Yes</button>
        <button onClick={() => setDeleteContextAlert(false)}>No</button>
    </div>
    </div>
  </div>
  )
}

export default DeleteAlert