import React, { useContext, useEffect } from 'react'
import "./Card.css"
import { moreInfoContext } from '../context/MoreInfoContext'
import { Link } from 'react-router-dom'
const Card = ({value}) => {
    // console.log("value data aa",value);
    const {moreInfoData , setMoreInfoData} = useContext(moreInfoContext)
    const cardHandler = ()=>{
      setMoreInfoData(value)
      
      // location.href="/moreInfo"
      
    }
    useEffect(()=>{
      // console.log(value);
      // console.log(moreInfoData);
      
    },[cardHandler])
  return (
<div className="card">
  <Link to={`/moreInfo?id=${value.id}`} onClick={() => setMoreInfoData(value)}>

    <div className="imgDiv">
      <img src={value.images?.[0]} alt="Laptop" />
    </div>

    <div className="infoDiv">
      <h3>{value.name}</h3>
      <p className="p">₹{value.price}</p>
      <p className="verified">✔ Verified</p>
    </div>

  </Link>
</div>
  )
}

export default Card