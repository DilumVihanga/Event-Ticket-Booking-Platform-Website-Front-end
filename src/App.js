import React from 'react'
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contact from './Pages/Contact';
import Upcomingevents from './Pages/Upcomingevents';
import Home from './Pages/Home';
import FooterComp from './Components/Footer/FooterComp';
import LoginSignup from './Pages/LoginSignup';
import Detail from './Pages/Detail';
import TicketOrder from './Pages/TicketOrder';
import Checkout from './Pages/Checkout';
import Sidebar from './Pages/SidebarORG';
import LoginComp from './Components/Login/LoginComp';
import CardGrid from './Components/CardGrid/CardGrid';
import HeroComp from './Components/Hero/HeroComp';
import OrderformComp from './Components/TicketOrderFrom/OrderformComp';
import SidebarORG from './Pages/SidebarORG';
import SidebarADMIN from './Pages/SidebarADMIN';
import SidebarUSER from './Pages/SidebarUSER';



export default function () {
  return (
    <div>
      
      <BrowserRouter>
      
      <Routes>
        <Route index element={<Home/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/upcomingevents" element={<Upcomingevents/>}/>
        <Route path="/login" element={<LoginSignup/>}/>
        <Route path="/detail" element={<Detail/>}/>
        <Route path="/orderform" element={<TicketOrder/>}/>
        <Route path="/checkout" element={<Checkout/>}/>
        <Route path="dashboard" element={<SidebarORG/>}> 
        <Route path="" element={<LoginComp/>}/>
         <Route path="overview" element={<LoginComp/>}/>
          <Route path="tickets" element={<CardGrid/>}/>
          <Route path="events" element={<HeroComp/>}/>
          <Route path="sales" element={<OrderformComp/>}/>
         </Route>
         <Route path="admin" element={<SidebarADMIN/>}> 
        <Route path="" element={<LoginComp/>}/>
         <Route path="overview" element={<LoginComp/>}/>
          <Route path="tickets" element={<CardGrid/>}/>
          <Route path="events" element={<HeroComp/>}/>
          <Route path="sales" element={<OrderformComp/>}/>
         </Route>
         <Route path="ordermanage" element={<SidebarUSER/>}> 
        <Route path="" element={<LoginComp/>}/>
         <Route path="overview" element={<LoginComp/>}/>
          <Route path="tickets" element={<CardGrid/>}/>
          <Route path="events" element={<HeroComp/>}/>
          <Route path="sales" element={<OrderformComp/>}/>
         </Route>
        </Routes>      
      </BrowserRouter>

      
      <br></br> <br></br> <br></br> <br></br>
      <FooterComp/>
      
    </div>
  )
}
