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
      // console.log(moreInfoData);
      
    },[cardHandler])
  return (
    <div className="card" onClick={cardHandler}>
      <Link to="/moreInfo">
      <div className="imgDiv">
        <img src={value.image} alt="Laptop" />
      </div>
   <div className="infoDiv">
       <h3>{value.name}</h3>
      <p className="price">₹{value.price}</p>
      <p className="verified">✔ Verified</p>
      <p className="return">{value.return}</p>
   </div>
    </Link>
    </div>
  )
}

export default Card