import React, { useEffect, useState } from "react";
import "./AddLaptop.css";
import axios from "axios";
import Header from "../components/Header";
import Menu from "../components/Menu";
import { useNavigate } from "react-router-dom";
import Adding from "../components/Adding";


const AddLaptop = () => {
const navigate = useNavigate();

  const [images, setImages] = useState([]);
  const [isAdding, setIsAdding] = useState(false);
  const [form, setForm] = useState({
    brandName: "",
    price: "",
    description: "",
    ram: "",
    processor: "",
    storage: "",
    location: ""
  });


   // 🔐 Token Verify
   
    useEffect(() => {
      const token = localStorage.getItem("token")
  
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
  

  // handle text input
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // handle multiple images
  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setImages(files);
  };

  // submit
  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData();
    images.forEach((img) => data.append("images", img));

    Object.keys(form).forEach((key) => {
      data.append(key, form[key]);
    });

    // console.log("FORM DATA READY", data);

    // 👉 yaha backend API call karega

    setIsAdding(true);
    axios.post("https://laptopsdekho-backend.onrender.com/api/laptop/add", data)
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

        <input name="brandName" placeholder="Brand Name" onChange={handleChange} />
        <input name="price" placeholder="Price" onChange={handleChange} />
        <input name="location" placeholder="Location" onChange={handleChange} />

        <textarea name="description" placeholder="Description" onChange={handleChange} />

        <input name="ram" placeholder="RAM (8GB, 16GB)" onChange={handleChange} />
        <input name="processor" placeholder="Processor" onChange={handleChange} />
        <input name="storage" placeholder="Storage" onChange={handleChange} />

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