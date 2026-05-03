import React, { useEffect, useState } from "react";
import "./AddLaptop.css";
import axios from "axios";
import Header from "../components/Header";
import Menu from "../components/Menu";
import { useNavigate } from "react-router-dom";
import Adding from "../components/loadingCompo/Adding";


const AddLaptop = () => {
const navigate = useNavigate();
const formData = new FormData()
const token = localStorage.getItem("token")

  const [images, setImages] = useState([]);
  const [isAdding, setIsAdding] = useState(false);
 const [brandName, setBrandName] = useState()
const [laptopPrice, setLaptopPrice] = useState()
const [laptopAddress, setLaptopAddress] = useState()
const [laptopDesc, setLaptopDesc] = useState()
const [laptopRam, setLaptopRam] = useState()
const [laptopProcessor, setLaptopProcessor] = useState()
const [laptopStorage, setLaptopStorage] = useState()
const [phoneNo, setPhoneNo] = useState()
   // 🔐 Token Verify
   
    useEffect(() => {
  
      if (!token) {
        navigate("/login")
        return
      }
  
      fetch("https://laptopsdekho-backend.onrender.com/api/auth/verify", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then(res => {
          if (!res.ok) throw new Error("Unauthorized")
        })
        .catch(() => {
          localStorage.removeItem("token")
          navigate("/login")
        })
    }, [])
  

  

  // handle multiple images
  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setImages(files);
  };

  // submit
  const handleSubmit = (e) => {
    e.preventDefault(); 
formData.append("brandName",brandName)
formData.append("laptopPrice",laptopPrice)
formData.append("laptopAddress",laptopAddress)
formData.append("laptopDesc",laptopDesc)
formData.append("laptopRam",laptopRam)
formData.append("laptopProcessor",laptopProcessor)
formData.append("laptopStorage",laptopStorage)
formData.append("phoneNo",phoneNo)
images.forEach((img, index) => {
  formData.append(`images`, img); // Append each image to FormData
});  // Append the array of images to FormData
formData.append("token",token)

    // console.log("FORM DATA READY", data);


    // 👉 yaha backend API call karega

    setIsAdding(true);
    axios.post("http://localhost:3000/api/laptop/add", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
        .then((res) => {
          console.log("Laptop added successfully", res.data);
          setIsAdding(false);
          navigate("/");
        })
        .catch((err) => {
          console.error("Error adding laptop", err);
          setIsAdding(false);
        });
  };

  return (
    <div className="addLaptop">

      <Header/>
      <Menu/>
      <h2>Add Laptop</h2>
<div className="formDiv">
      {isAdding ? <Adding /> : null}
  
      <form onSubmit={handleSubmit}>
<input type="number" name="number" placeholder="Enter Your Phone No" onChange={e=>setPhoneNo(e.target.value)}/>
        <input name="brandName" placeholder="Brand Name" onChange={e=>setBrandName(e.target.value)} />
        <input name="price" placeholder="Price" onChange={e=>setLaptopPrice(e.target.value)} />
        <input name="location" placeholder="Location" onChange={e=>setLaptopAddress(e.target.value)} />

        <textarea name="description" placeholder="Description" onChange={e=>setLaptopDesc(e.target.value)} />

        <input name="ram" placeholder="RAM (8GB, 16GB)" onChange={e=>setLaptopRam(e.target.value)} />
        <input name="processor" placeholder="Processor" onChange={e=>setLaptopProcessor(e.target.value)} />
        <input name="storage" placeholder="Storage" onChange={e=>setLaptopStorage(e.target.value)} />

        {/* MULTIPLE IMAGE INPUT */}
        <input type="file" multiple onChange={handleImageChange} />

        {/* PREVIEW */}
        <div className="preview">
          {images.map((img, i) => (
            <img key={i} src={URL.createObjectURL(img)} alt="preview" />
          ))}
        </div>

        <button type="submit">Submit Laptop</button>
      </form>
</div>
    </div>
  );
};

export default AddLaptop;