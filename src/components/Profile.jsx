import React from 'react'
import { NavProfile } from '../widgets/Profile/NavProfile'
import { MenuInicio } from '../widgets/Profile/MenuInicio'
import { Footer } from './Footer'
import { Route, Routes } from 'react-router-dom'
import { Paqueteria } from './Paqueteria'

export const Profile = () => {

  return (
    <>
      <NavProfile />
      <Routes>
        <Route path='/' element={<MenuInicio />} />
        <Route path='paqueteria' element={<Paqueteria />} />

      </Routes>

      <Footer />


    </>
  )
}
