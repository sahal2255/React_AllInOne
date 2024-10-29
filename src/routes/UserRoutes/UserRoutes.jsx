import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import HomePage from "../../Pages/HomePage";
import Product from "../../Pages/Product";
import Header from "../../components/Header";
import Todo from "../../Pages/Todo";
import Counter from "../../Pages/Counter";

const UserRoute=()=>{
    return (
        <BrowserRouter>
        <Header />
            <Routes>
                <Route path="/" element={<HomePage />}/>
                <Route path="/products" element={<Product />}/>
                <Route path="/todo" element={<Todo />} />
                <Route path="/counter" element={<Counter />} />
            </Routes>
        </BrowserRouter>
    )
}

export default UserRoute