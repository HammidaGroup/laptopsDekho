import React, { useRef } from 'react'
import "./AllProductsLinkCopy.css";
const AllProductsLinkCopy = ({ laptopsData }) => {

  const inputRef = useRef()

  const copyHandler = async () => {
    try {
      await navigator.clipboard.writeText(inputRef.current.value)
      alert("Link copied!")
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='allProductsLinkCopy'>
        <div className="text">
        <h2>Share Your Products</h2>
        <p>Copy the link below to share all your products with others!</p>
        </div>
      <input
        type="text"
        ref={inputRef}
        value={`https://laptopsDekho.xyz/allProducts?allProducts=${laptopsData[0]?._id || ''}`}
        readOnly
      />

      <button onClick={copyHandler}>
        Copy
      </button>
    </div>
  )
}

export default AllProductsLinkCopy