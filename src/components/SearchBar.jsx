import React, { useState } from "react";

const SearchBar=({searchOption})=>{
    const [search,setSearch]=useState('')

    const handleChange=(e)=>{
        setSearch(e.target.value)
        searchOption(e.target.value)
    }

    // const handleSubmit =()=>{
    //     searchOption(search)
    // }
    return(
        <div className=" p-4 flex">
            <input type="text" onChange={handleChange} value={search} className="bg-blue-200 h-10 " placeholder="Enter product name"/>
            {/* <button className="bg-blue-400 w-24 h-10 rounded-lg"
            onClick={handleSubmit}
            >search</button> */}
        </div>
    )
}

export default SearchBar