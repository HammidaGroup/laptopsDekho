import React, { useContext, useEffect, useState } from 'react'
import "./HomePage.css"
import Header from '../components/Header'
import HomeHero from '../components/HomeHero'
import Card from '../components/Card'
import Menu from '../components/Menu'
import SearchSlider from '../components/SearchSlider'
import { searchContext } from '../context/SearchContext'
import Adding from '../components/Adding'

const HomePage = () => {
  const { searchTerm, setSearchTerm, selectedRange, setSelectedRange } = useContext(searchContext);

  const [laptopsData, setLaptopsData] = useState([])
  const getlaptopsData = async ()=>{
    try {
      
  const response =  await fetch("https://laptopsdekho-backend.onrender.com/api/get/laptops/data")
  const laptopsData = await response.json()
  // console.log(laptopsData);
  
   setLaptopsData(laptopsData)
    } catch (error) {
      console.error("Error fetching laptops data:");
    }
    
  }
  useEffect(()=>{
  getlaptopsData()
},[])


const filteredData = laptopsData.filter((item) => {
  const search = (searchTerm || "").toString().toLowerCase();

  const matchesSearch =
    item.name?.toLowerCase().includes(search) ||
    item.description?.toLowerCase().includes(search);

  const matchesPrice =
    !selectedRange ||
    (item.price >= selectedRange.min &&
      item.price <= selectedRange.max);

  return matchesSearch && matchesPrice;
});
if(laptopsData.length==0) return console.log("not a laptopsData")
 // 🔥 Chunk Books (2 per row)
  const chunkArray = (arr, size) => {
    const result = [];
    for (let i = 0; i < arr.length; i += size) {
      result.push(arr.slice(i, i + size));
    }
    return result;
  };
// console.log(laptopsData);
  
  return (
    <>
    <div className="homeMainDiv">
    <Header/>
    <Menu/>
<HomeHero/>
<SearchSlider/>
<Adding/>
 {chunkArray(filteredData, 2).map((group, index) => (
          <div className="card-cont" key={index}>
            {group.map((data) => (
              <Card key={data._id} value={data} />
            ))}
          </div>
        ))}

    </div>
    </>
  )
}

export default HomePage