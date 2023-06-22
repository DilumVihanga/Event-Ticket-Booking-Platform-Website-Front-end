import React from 'react'
import RegisterFormORG from '../Components/RegisterformORG/RegisterFormORG'
import LoginFormORG from '../Components/RegisterformORG/LoginFormORG'
import LoginFormUSER from '../Components/RegisterformUSER/LoginFormUSER'
import RegisterFormUSER from '../Components/RegisterformUSER/RegisterFormUSER'

export default function RegisterformORG() {
  return (
    <div>
        <RegisterFormORG/> <LoginFormORG/> <LoginFormUSER/> <RegisterFormUSER/>
    </div>
  )
}
