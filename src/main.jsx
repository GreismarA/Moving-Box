import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './components/pages/home/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
    </Routes>
  </BrowserRouter>  
)
