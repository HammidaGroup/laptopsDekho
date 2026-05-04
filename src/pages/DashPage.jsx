import React, { useEffect, useState } from 'react'
import "./DashPage.css"
import Header from '../components/Header'
import Menu from '../components/Menu'
import loadingGif from "../assets/loading.gif"
import DashCard from '../components/cardCompo/DashCard'
const DashPage = () => {
      const [isLoading, setIsLoading] = useState(true)
const [laptopsData, setLaptopsData] = useState([])
       useEffect(()=>{
        const getlaptopsData = async ()=>{
          try {
            
        const response =  await fetch("./data.json")
        const laptopsData = await response.json()
        // console.log(laptopsData);
        setLaptopsData(laptopsData)
        laptopsData.reverse() // Reverse the array to show the latest laptops first
          setIsLoading(false)
          } catch (error) {
            console.error("Error fetching laptops data:");
          }
          
        }
        getlaptopsData()
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
    <div className="dashPageDiv">
    <Header/>
<Menu/>
<div className="dashCardDiv">
    
    {isLoading ? (
          <div className="loadingDiv">
            <img className='loadingGif' src={loadingGif} alt="Loading..." />
          </div>
        ) : (
          chunkArray(laptopsData, 2).map((group, index) => (
            <div className="card-cont" key={index}>
              {group.map((data,ind) => (
                <DashCard key={ind} value={data} />
              ))}
            </div>
        ))
        )}
</div>
    </div>
    </>
  )
}

export default DashPage