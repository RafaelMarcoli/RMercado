import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React from 'react'
import Home from "../../Pages/Home/Home"
import Alimentos from "../../Pages/Alimentos/Alimentos"
import Bebidas from "../../Pages/Bebidas/Bebidas"
import Limpeza from "../../Pages/Limpeza/Limpeza"
import Page404 from '../../Pages/Page404/Page404'

function Navbar() {
  return (
    
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/alimentos' element={<Alimentos/>} />
            <Route path='/bebidas' element={<Bebidas/>} />
            <Route path='/limpeza' element={<Limpeza/>} />
            <Route path='*' element={<Page404/>} />
        </Routes>
        </BrowserRouter>
    
  )
}

export default Navbar
