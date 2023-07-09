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
import Seatmap from './Pages/Seatmap';
import LoginORG from './Pages/LoginORG';
import LoginUSER from './Pages/LoginUSER';
import RegisterUSER from './Pages/RegisterUSER';
import RegisterORG from './Pages/RegisterORG';



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
        <Route path="/seatmap" element={<Seatmap/>}/>
        <Route path="/loginorg" element={<LoginORG/>}/>
        <Route path="/loginu" element={<LoginUSER/>}/>
        <Route path="/registeru" element={<RegisterUSER/>}/>
        <Route path="/registerorg" element={<RegisterORG/>}/>
     
        <Route path="dashboard" element={<SidebarORG/>}> 
        <Route path="" element={<LoginComp/>}/>
         <Route path="overview" element={<LoginComp/>}/>
          <Route path="tickets" element={<CardGrid/>}/>
          <Route path="events" element={<HeroComp/>}/>
          <Route path="sales" element={<OrderformComp/>}/>
          <Route path="reports" element={<CardGrid/>}/>
         </Route>

         <Route path="admin" element={<SidebarADMIN/>}> 
        <Route path="" element={<LoginComp/>}/>
         <Route path="overview" element={<LoginComp/>}/>
          <Route path="tickets" element={<CardGrid/>}/>
          <Route path="events" element={<HeroComp/>}/>
          <Route path="users" element={<OrderformComp/>}/>
          <Route path="organizers" element={<OrderformComp/>}/>
         </Route>

         <Route path="ordermanage" element={<SidebarUSER/>}> 
        <Route path="" element={<LoginComp/>}/>
         
          <Route path="orders" element={<CardGrid/>}/>
          <Route path="validated" element={<CardGrid/>}/>
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
