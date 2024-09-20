/* eslint-disable no-unused-vars */
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Card from "../pages/Card"
import Category from "../pages/Category"
import Product from "../pages/Product"
import Login_form from '../pages/Login_form'

const Navigation = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login_form />} />
        <Route path='/Home' element={<Home />} />
        <Route path='/card' element={<Card />} />
        <Route path='/category' element={<Category />} />
        <Route path='/product' element={<Product />} />
      </Routes>
    </Router>
  )
}

export default Navigation