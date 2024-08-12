import React from 'react'
import img1 from '../assets/img.jpg'

const Product = () => {
  return (
    <div className="bg-gray-50 w-48 h-56 flex items-center flex-col justify-center hover:bg-white hover:cursor-pointer ">
      <div className="w-36 ">
        <img src={img1} alt="hello"></img>
      </div>
      <div className="flex items-center justify-center flex-col">
        <div className="text-xl font-semibold">Name</div>
        <div>$100</div>
      </div>
    </div>
  );
}

export default Product