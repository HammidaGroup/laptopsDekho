import React, { useEffect, useState } from 'react'
import "./SellerDetailsPage.css"
import { useSearchParams } from 'react-router-dom'
import Header from '../components/Header'
import Menu from '../components/Menu'
import Card from '../components/Card'
import loadingGif from "../assets/loading.gif"
const SellerDetailsPage = () => {
 const params = useSearchParams()
 const allProductsId = params[0].get("allProducts")
//  console.log(allProductsId);
const [data, setData] = useState([])
const [isLoading, setIsLoading] = useState(true)
 useEffect(()=>{
const fetchData = async () => {
  const respose = await fetch(`http://localhost:3000/api/get/allProducts`, {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({ allProductsId })
})
const datajson = await respose.json()
setData(datajson.productDetails)
setIsLoading(false)
// console.log(datajson);


}
fetchData()
 },[])
  // 🔥 Chunk Books (2 per row)
  const chunkArray = (arr, size) => {
    const result = [];
    for (let i = 0; i < arr.length; i += size) {
      result.push(arr.slice(i, i + size));
    }
    return result;
  };
 return (
     <>
    <div className="sellerDetailsPage">
     <Header/>
     <Menu/>
        <div className="sellerDetailsCardDiv">

     {isLoading ? (
       <div className="loadingDiv">
            <img className='loadingGif' src={loadingGif} alt="Loading..." />
          </div>
        ) : (
          chunkArray(data, 2).map((group, index) => (
            <div className="card-cont" key={index}>
              {group.map((data) => (
                <Card key={data._id} value={data} />
              ))}
            </div>
        ))
      )}
      </div>
    </div>
     </>
  )
}

export default SellerDetailsPage