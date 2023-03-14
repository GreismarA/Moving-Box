import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Box from './pages/Box';
import Home from './components/pages/home/Home'
import NewBoxForm from "./components/NewBoxForm/NewBoxForm"
import './index.css'
import BoxDetails from './components/BoxDetails';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<BoxDetails/>}></Route>
      <Route path='/box' element={<Box/>}></Route>
      <Route path='/form' element={<NewBoxForm/>}></Route>
    </Routes>
  </BrowserRouter>  
)
