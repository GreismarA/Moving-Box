import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Box from './pages/Box';
import Home from './components/pages/home/Home'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/box' element={<Box/>}></Route>
    </Routes>
  </BrowserRouter>  
)
