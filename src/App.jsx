import { useState } from 'react'
import {BrowserRouter , Routes , Route } from 'react-router-dom'
import './App.css'
import Countries from './components/countries.jsx'
import Error from './components/Error.jsx'
import SingleCountry from './components/SingleCountry'

function App() {
  return (
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Countries/>}></Route>
    <Route path='/:name' element={<SingleCountry/>}></Route>
    <Route path="*" element={<Error/>}></Route>
  </Routes>
  </BrowserRouter>
  
  )
}

export default App
