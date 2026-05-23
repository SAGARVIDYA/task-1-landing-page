import React from 'react'

import { Routes, Route } from 'react-router-dom'

import Navbar from './COMPONENTS/Navbar'

import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import Contact from './pages/Contact'

function App() {

  return (

    <div>

      <Navbar />

      <Routes>

        <Route path='/' element={<Home />} />

        <Route path='/products' element={<Products />} />

        <Route path='/about' element={<About />} />

        <Route path='/contact' element={<Contact />} />

      </Routes>

    </div>

  )
}

export default App