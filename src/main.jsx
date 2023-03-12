import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Box from './pages/Box';
import Home from './components/pages/home/Home'
import NewBoxForm from "./components/NewBoxForm"
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/box' element={<Box/>}></Route>
      <Route path='/form' element={<NewBoxForm/>}></Route>
    </Routes>
  </BrowserRouter>  
)
