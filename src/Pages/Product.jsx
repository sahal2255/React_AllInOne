import React, { useEffect, useState } from "react";
import Products from '../../public/data.json'
import Card from "../components/Card";
import SearchBar from "../components/SearchBar";

const Product=()=>{
    const [products,setProducts]=useState([])
    const [searchitem,setSearchitem]=useState('')
    useEffect(()=>{
      setProducts(Products)  
    },[])

    const handelSearchInput=(searchinput)=>{
        setSearchitem(searchinput)
        console.log('search input in the products components',searchinput)
    }


    const filteredProduct=products.filter((item)=>{
       return item.Name.toLowerCase().includes(searchitem.toLowerCase())
    })
    console.log('filtered products',filteredProduct)
    return (
        <div>
            <h2>This is the Product Page</h2>
            <div className=" shadow-xl place-items-center">

                <SearchBar searchOption={handelSearchInput}/>
            </div>
            <div className="flex">
                <div className="w-1/4 bg-yellow-100">hell</div>
                <div className="w-3/4 flex flex-wrap gap-5 m-6">
                    {filteredProduct.map((item,index)=>(
                        <div key={index} className="">
                            <Card productImage={item.image}
                            productName={item.Name} productPrice={item.price} productBrand={item.brand}
                            productCategory={item.category} productReview={item.review}
                            />
                        </div>
                    ))}
                </div>
            </div>
            
        </div>
    )
}

export default Product