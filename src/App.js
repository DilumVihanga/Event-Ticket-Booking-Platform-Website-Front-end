import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contact from './Pages/Contact';
import Upcomingevents from './Pages/Upcomingevents';
import Home from './Pages/Home';

import React from 'react'

export default function () {
  return (
    <div>

      <BrowserRouter>
      <Routes>
        <Route index element={<Home/>}/>
        </Routes>      
      </BrowserRouter>
      
    </div>
  )
}
