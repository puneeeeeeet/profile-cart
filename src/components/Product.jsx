import React from 'react'
import img1 from '../assets/img.jpg'
import data from '../assets/products.json'
import { useState, useEffect } from "react";

const Product = () => {
    const[items, setItems]=useState([]);
    const[detail, setDetails]= useState([]);
    useEffect(() => {
        setItems(data);
      }, []);
  return (
    <div className="mt-10  grid grid-cols-5 gap-y-3 ml-5">
      {items.map((item) => (
        <div className="border-2 border-black w-56 h-56 flex items-center flex-col justify-center hover:bg-white hover:cursor-pointer ">
          <div className="w-32 static ">
            <img src={img1} alt="hello"></img>
          </div>
          <div className=' align-baseline  flex items-center justify-center flex-col  '>
            <div className="text-xl font-semibold">{item.name}</div>
            <div>$100</div>
            <div className="bg-yellow-200 px-2 rounded-lg">Add to cart</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Product