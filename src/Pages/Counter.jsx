import React, { useState } from "react";
import Modal from "../components/Modal";


const Counter=()=>{
    const [count,setCount]=useState(0)
    const [time,setTime]=useState(0)
    const [intervelId,setIntervalId]=useState(null)
    const [open,setOpen]=useState(false)
    const handleDecrement=()=>{
        setCount(count-1)
    }
    const handleIncrement=()=>{
        setCount(count+1)
    }

    const handleStartTime=()=>{
        const running=setInterval(()=>{
            setTime((pre)=> pre + 1)
        },1000)
        setIntervalId(running)
    }
    const handleStopTime=()=>{
        console.log('clicking the stop button')
        clearInterval(intervelId)
        setIntervalId(null)
    }
    const handleResetTime=()=>{
        console.log('clicking the reset button')
        clearInterval(intervelId)
        setTime(0)
        setIntervalId(null)        
    }


    const handleOpenModal=()=>{
        console.log('clicking the modal open button')
        setOpen(true)
    }

    const handleCloseModal=()=>{
        setOpen(false)
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
                        <button className="bg-blue-500 w-20 h-10 rounded-lg" onClick={handleStartTime}>Start</button>
                        <button className="bg-red-500 w-20 h-10 rounded-lg" onClick={handleStopTime}>Stop</button>
                        <button className="bg-gray-500 w-20 h-10 rounded-lg" onClick={handleResetTime}>Reset</button>
                    </div>
                </div>
            </div>
            <div className=" flex place-content-center items-center mt-6 p-5 ">
                <button className="bg-blue-500 w-32 h-10 text-white rounded-lg" onClick={handleOpenModal}>Opne Modal</button>
            </div>
            {/* <div className="flex place-content-center items-center justify-center">

                    
            </div> */}
            <Modal  open={open} onClose={handleCloseModal} />
        </>
    )
}

export default Counter