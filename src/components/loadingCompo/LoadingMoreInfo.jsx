import React from 'react'
import "./LoadingMoreInfo.css"
import loading from "../../assets/loading.gif"
const LoadingMoreInfo = () => {
  return (
  <div className="loadingMoreInfo">
    <img src={loading} alt="Loading..." />
  </div>
  )
}

export default LoadingMoreInfo