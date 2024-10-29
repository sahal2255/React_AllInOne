import React from "react";
import { Link } from "react-router-dom";
const Header=()=>{
    return(
        <div className="w-full bg-blue-600 h-20 flex justify-center items-center gap-4">
            <Link to='/' className="font-semibold hover:text-white">Home</Link>
            <Link to='/products' className="font-semibold hover:text-white">Products</Link>
            <Link to='/todo' className="font-semibold hover:text-white">Todo</Link>
            <Link to='/counter' className="font-semibold hover:text-white">Counter</Link>
        </div>
    )
}

export default Header