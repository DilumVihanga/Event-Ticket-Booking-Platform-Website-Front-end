import React from 'react'
import RegisterFormORG from '../Components/RegisterformORG/RegisterFormORG'
import LoginFormORG from '../Components/RegisterformORG/LoginFormORG'
import NavComp from '../Components/Nav/NavComp';
import Register from '../Components/Register.json'
import Lottie from "lottie-react"

export default function RegisterformORG() {
  return (
    <div>
      <NavComp/><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>

      <div style={{width:'500px', position:'absolute', marginTop:'40px', marginLeft:'150px'}}> <Lottie animationData={Register} /> </div>

       <div style={{marginLeft:'40%'}}>  <LoginFormORG/> 
       
       <h1 style={{fontFamily:"cursive" , color: "white", fontSize:'14px'}}>Still not a Member? Register Now 👇</h1>

       <br></br><br></br><br></br>
       
       <RegisterFormORG/> 
       
       </div>
    </div>
  )
}
