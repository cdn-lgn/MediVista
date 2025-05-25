import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import ProductPage from './pages/ProductPage';

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/product/:id" element={<ProductPage />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
