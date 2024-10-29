import React, { useState } from "react";

const Todo=()=>{
    const [value,setValue]=useState('')
    const [todo,setTodo]=useState([])
    const handleChange=(e)=>{
        setValue(e.target.value)
    }

    const handleAdd=()=>{
        setTodo([...todo,value])
        setValue('')
    }

    const handleEdit=(index)=>{
        console.log('id of edit option',index)
        const edited=todo[index]
        console.log('founded value for edit option',edited)
        setValue(edited)
    }

    const handleDelete=(index)=>{
        console.log('delete index',index)
        const filtered=todo.filter((_,id)=>id!==index)
        setTodo(filtered)
    }


    return(
        <div>
            <div className=" place-content-center flex p-6">
                <input type="text" name="" id="" className="bg-slate-200" onChange={handleChange} value={value} />
                <button className="bg-blue-300 w-20 rounded-lg hover:bg-blue-600 h-6" onClick={handleAdd}>Submit </button>
            </div>
            <div className="mx-auto place-items-center mt-5">
                {todo.map((item,index)=>(
                    <div key={index} className="bg-yellow-400 w-80 flex items-center place-content-center mt-1 h-14 rounded-lg ">
                        <p className=" rounded-lg w-auto text-black">{item}</p>
                        <button className="bg-blue-500 w-10 rounded-lg ml-3" onClick={()=>handleEdit(index)}>Edit</button>
                        <button className="bg-red-500 w-16 rounded-lg ml-3" onClick={()=>handleDelete(index)}>Delete</button>
                    </div>
                )
                )}
            </div>
        </div>
    )
}

export default Todo