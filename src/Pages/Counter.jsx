import React, { useState } from "react";


const Counter=()=>{
    const [count,setCount]=useState(0)
    const [time,setTime]=useState(0)

    const handleDecrement=()=>{
        setCount(count-1)
    }
    const handleIncrement=()=>{
        setCount(count+1)
    }
    return(
        <>
            <div className="bg-gray-50 flex place-content-center items-center mt-3 p-6 gap-6">
                <button onClick={handleDecrement} className="bg-blue-400 w-10 h-10 rounded-lg">-</button>
                <h1 className="font-semibold text-black ">Count:{count}</h1>
                <button onClick={handleIncrement} className="bg-blue-400 w-10 h-10 rounded-lg">+</button>
            </div>
            <div className="bg-yellow-50 flex place-content-center items-center mt-6 p-6">
                <div className=" mx-auto">
                    <h1 className="text-black font-semibold text-center mt-2">{time}</h1>
                    <div className="flex gap-4 mt-6">
                        <button className="bg-blue-500 w-20 h-10 rounded-lg">Start</button>
                        <button className="bg-red-500 w-20 h-10 rounded-lg">Stop</button>
                        <button className="bg-gray-500 w-20 h-10 rounded-lg">Reset</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Counter