
import React,{useState}from "react";



const Card =({productImage,productName,productPrice,productReview,productCategory,productBrand})=>{

    return(
        <div className="bg-slate-400 w-72 rounded-lg shadow-md">
            <div className=" items-center place-content-center bg-gray-300 p-3">
                <div className=" w-full h-48 overflow-hidden rounded-xl">
                    <img src={productImage} alt="this is product image" className="object-cover" />

                </div>
                <div className=" items-center">
                    <h1>{productName}</h1>
                    <h2>{productPrice}</h2>
                    <p>{productBrand}</p>
                    <p>{productCategory}</p>
                </div>
                
            </div>
        </div>
    )
}

export default Card