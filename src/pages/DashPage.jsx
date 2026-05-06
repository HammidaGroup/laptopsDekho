import React, { useContext, useEffect, useState } from 'react'
import "./DashPage.css"
import Header from '../components/Header'
import Menu from '../components/Menu'
import loadingGif from "../assets/loading.gif"
import DashCard from '../components/cardCompo/DashCard'
import DeleteAlert from '../components/alertsCompo/DeleteAlert'
import { GlobleContext } from '../context/GlobleContext'
import NotPropertyDash from '../components/alertsCompo/NotPropertyDash'
import { MenuLogicContext } from '../context/menuLogicContext'
const DashPage = () => {
  // menu ko close krne k liye jab bhi  page open ho to menu close ho jaye
    const menuLogicContext = useContext(MenuLogicContext);
      useEffect(()=>{
        menuLogicContext.setisMenu(false)
      },[])

  //context
  const {deleteContextAlert, setDeleteContextAlert} = useContext(GlobleContext)
  
  
  const formData = new FormData()

  const token = localStorage.getItem("token")
      const [isLoading, setIsLoading] = useState(true)
      const [isDeleteAlert, setIsDeleteAlert] = useState(false)
      const [isNotItems, setIsNotItems] = useState(false)
      const [deleteId, setDeleteId] = useState(null);

const [laptopsData, setLaptopsData] = useState([])
formData.append("token", token)

useEffect(()=>{
  const getlaptopsData = async ()=>{
          try {


        const response =  await fetch("https://laptopsdekho-backend.onrender.com/api/data/dashboard", {
          method: "POST",
          headers: {
            "Authorization": `Bearer ${token}`
          },
          body: formData
        })
        const laptopsData = await response.json()
        // console.log(laptopsData);
        setLaptopsData(laptopsData.data)
        if(laptopsData.data.length === 0){
          setIsNotItems(true)
        }
        // laptopsData.reverse() // Reverse the array to show the latest laptops first
        // console.log(laptopsData.data);
        
          setIsLoading(false)
          } catch (error) {
            console.error("Error fetching laptops data:", error);
          }
          
        }
        getlaptopsData()
      },[])

      //for delete alert
      useEffect(() => {
  if (deleteContextAlert === true && deleteId) {
    deleteLaptop(deleteId);
  }

  if (deleteContextAlert === false) {
    setIsDeleteAlert(false);
    setDeleteId(null);
  }
}, [deleteContextAlert]);
      const deleteLaptop = async (id) => {
  try {
    
    formData.append("laptopId", id);

    const response = await fetch("https://laptopsdekho-backend.onrender.com/api/data/deleteLaptop", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${token}`
      },
      body: formData
    });

    if (response.ok) {
      setLaptopsData(prev =>
        prev.filter(laptop => laptop._id !== id)
      );
    }
  } catch (error) {
    console.error("Error deleting laptop:", error);
  } finally {
    setIsDeleteAlert(false);
    setDeleteContextAlert(null);
    setDeleteId(null);
  }
};
      
    const onDelete = (id) => {
  setDeleteId(id);
  setIsDeleteAlert(true);
};

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
   {isDeleteAlert && <DeleteAlert/>}
   {isNotItems ? <NotPropertyDash /> : null}
    {isLoading ? (
          <div className="loadingDiv">
            <img className='loadingGif' src={loadingGif} alt="Loading..." />
          </div>
        ) : (
          chunkArray(laptopsData, 2).map((group, index) => (
            <div className="card-cont" key={index}>
              {group.map((data,ind) => (
                <DashCard key={ind} value={data} onDelete={onDelete} />
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