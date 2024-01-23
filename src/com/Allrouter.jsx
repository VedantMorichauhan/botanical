import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Contect from '../pages/Contect'
import Blog from '../pages/Blog'
import Store from '../pages/Store'
import Cart from '../pages/Cart'
import About from '../pages/About'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Signup from '../pages/Signup'




const Allrouter = () => {
    return (
        <>
            <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/About' element={<About/>} />
            <Route path='/Store' element={<Store/>} />
            <Route path='/Blog' element={<Blog/>} />
            <Route path='/Cart' element={<Cart/>} />
            <Route path='/Contect' element={<Contect/>} />
            <Route path='/Login' element={<Login/>} />
            <Route path='/Signup' element={<Signup/>} />

   
            </Routes>
        </>
    )
}

export default Allrouter