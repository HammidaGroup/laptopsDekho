import React, { useState } from "react";
import "./SellerAddressPage.css";
import Header from "../components/Header";
import axios from "axios";

const SellerAddressPage = () => {
  const [sellerAddress, setSellerAddress] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
  });

  const changeHandler = (e) => {
    setSellerAddress({
      ...sellerAddress,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const pickup_location = {
      pickup_location: sellerAddress.email,

      name: sellerAddress.name,

      email: sellerAddress.email,

      phone: sellerAddress.phone,

      address: sellerAddress.address,

      address_2: "",

      city: sellerAddress.city,

      state: sellerAddress.state,

      country: "India",

      pincode: sellerAddress.pincode,
    };

    console.log(pickup_location);

    localStorage.setItem("pickup_location", JSON.stringify(pickup_location));

    alert("Pickup address saved successfully!");
    axios.post("http://localhost:3000/api/seller/address", pickup_location)
      .then((response) => {
        console.log("Pickup location saved:", response.data);
      })
      .catch((error) => {
        console.error("Error saving pickup location:", error);
      });
  };

  return (
    <>
        <Header/>
    <div className="sellLaptopPage">
      <form className="sellLaptopForm" onSubmit={submitHandler}>
        <h1>Add Pickup Address</h1>

        <input
          type="text"
          placeholder="Full Name"
          name="name"
          value={sellerAddress.name}
          onChange={changeHandler}
          required
        />

        <input
          type="email"
          placeholder="Email Address"
          name="email"
          value={sellerAddress.email}
          onChange={changeHandler}
          required
        />

        <input
          type="number"
          placeholder="Phone Number"
          name="phone"
          value={sellerAddress.phone}
          onChange={changeHandler}
          required
        />

        <textarea
          placeholder="Full Address"
          name="address"
          value={sellerAddress.address}
          onChange={changeHandler}
          required
          />

        <input
          type="text"
          placeholder="City"
          name="city"
          value={sellerAddress.city}
          onChange={changeHandler}
          required
          />

        <input
          type="text"
          placeholder="State"
          name="state"
          value={sellerAddress.state}
          onChange={changeHandler}
          required
        />

        <input
          type="number"
          placeholder="Pin Code"
          name="pincode"
          value={sellerAddress.pincode}
          onChange={changeHandler}
          required
          />

        <button type="submit">Save Address</button>
      </form>
    </div>
          </>
  );
};

export default SellerAddressPage;