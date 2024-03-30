import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './Components/Header'
import Home from './Components/Home'
import About from './Components/About'
import Product from './Components/Product'
import List from './Components/List'
import Details from './Components/Details'
import Aboutdetails from './Components/Aboutdetails'
import View from './Components/View'

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/Product' element={<Product />} />
          <Route path='/list' element={<List />} />
          <Route path='/details' element={<Details />} />
          <Route path='/aboutdetails' element={<Aboutdetails />} />
          <Route exact path="/list/update/:id" element={<Details />} />
          <Route path='/view' element={<View />} />

        </Routes>
      </BrowserRouter>

    </>
  )
}
