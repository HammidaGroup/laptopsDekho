import React from 'react'

const OrderBtn = ({value}) => {
    
   const orderHandler = () => {

    const message = `
      I Want Buy This Laptop.
      
      url : https://laptopsDekho.xyz/moreInfo${value.params}
    `
    const url = `https://wa.me/${7571950460}?text=${encodeURIComponent(message)}`;
    window.location.href = url;
   

   
  };
  return (
  <button className='orderBtn' onClick={e=>orderHandler}>Order Now</button>
  )

}


export default OrderBtn