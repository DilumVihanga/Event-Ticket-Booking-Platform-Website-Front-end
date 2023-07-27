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
import Userlogin from './Pages/Userlogin';
import Logout from './Pages/Logout';
import PrivateRoute from './Utils/PrivateRoute';
import {AuthProvider} from './Context/AuthContext';
import EventForm from './Components/EventForm/EventForm';
import MyeventsComp from './Components/Myevents/MyeventsComp';

import TicketcreateformComp from './Components/Ticketcreateform/TicketcreateformComp';
import EventDetailComp from './Components/Eventdetail/EventdetailComp';






export default function () {
  return (
    <div>
      <AuthProvider>
      <BrowserRouter>
      
      <Routes>
        <Route index element={<Home/>}/>
        <Route element= {<PrivateRoute/>}> <Route element= {<Contact/>}  path="/contact"/> </Route>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/upcomingevents" element={<Upcomingevents/>}/>
        <Route path="/login" element={<LoginSignup/>}/>
        <Route path="/logout" element={<Logout/>}/>
        {/* <Route path="/"  component={CardGrid} /> */}
        <Route path="/event/:id" element={<EventDetailComp/>} />
        
        <Route path="/detail" element={<Detail/>}/> 
        <Route path="/orderform" element={<TicketOrder/>}/>
        <Route path="/checkout" element={<Checkout/>}/>
        <Route path="/seatmap" element={<Seatmap/>}/>
        <Route path="/loginorg" element={<LoginORG/>}/>
        <Route path="/loginu" element={<LoginUSER/>}/> 
        <Route path="/registeru" element={<RegisterUSER/>}/>
        <Route path="/registerorg" element={<RegisterORG/>}/>
        
        <Route path="/log" element={<Userlogin/>}/>
     
        <Route path="dashboard" element={<SidebarORG/>}> 
        <Route path="" element={<LoginComp/>}/>
         <Route path="overview" element={<LoginComp/>}/>
          <Route path="tickets" element={<TicketcreateformComp/>}/>
          <Route path="events" element={<EventForm/>}/>
          <Route path="sales" element={<OrderformComp/>}/>
          <Route path="reports" element={<CardGrid/>}/>
          <Route path="create-event" element={<EventForm/>}/>
          <Route path="my-events" element={<MyeventsComp/>}/>
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
      </AuthProvider>
      
      <br></br> <br></br> <br></br> <br></br>
      <FooterComp/>
      
    </div>
  )
}
