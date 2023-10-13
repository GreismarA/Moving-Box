import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Box from './pages/Box';
import Home from './pages/Home';
import './resources/styles/index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/box' element={<Box />}></Route>
      </Routes>
    </BrowserRouter>  
  </StrictMode>
);