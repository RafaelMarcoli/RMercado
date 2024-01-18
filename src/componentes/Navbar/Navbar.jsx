import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React from 'react'
import Home from "../../Pages/Home/Home"
import Alimentos from "../../Pages/Alimentos/Alimentos"
import Bebidas from "../../Pages/Bebidas/Bebidas"
import Limpeza from "../../Pages/Limpeza/Limpeza"

function Navbar() {
  return (
    
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/alimentos' element={<Alimentos/>} />
            <Route path='/bebidas' element={<Bebidas/>} />
            <Route path='/limpeza' element={<Limpeza/>} />
        </Routes>
        </BrowserRouter>
    
  )
}

export default Navbar
