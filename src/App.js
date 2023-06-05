import React from 'react'
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contact from './Pages/Contact';
import Upcomingevents from './Pages/Upcomingevents';
import Home from './Pages/Home';
import NavComp from './Components/Nav/NavComp';
import FooterComp from './Components/Footer/FooterComp';
import LoginSignup from './Pages/LoginSignup';

export default function () {
  return (
    <div>
      <NavComp/>
      <BrowserRouter>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/upcomingevents" element={<Upcomingevents/>}/>
        <Route path="/login" element={<LoginSignup/>}/>
        </Routes>      
      </BrowserRouter>
      <FooterComp/>
      
    </div>
  )
}
