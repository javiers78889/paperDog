import { NavProfile } from '../widgets/Profile/NavProfile'
import { MenuInicio } from '../widgets/Profile/MenuInicio'
import { Footer } from './Footer'
import { Route, Routes } from 'react-router-dom'
import { Paqueteria } from './Paqueteria'
import { Direcciones } from '../widgets/Direcciones/Direcciones'
import { Usuarios } from './Usuarios'

export const Profile = () => {

  return (
    <>
      <NavProfile />
      <Routes>
        <Route path='/' element={<MenuInicio />} />
        <Route path='paqueteria' element={<Paqueteria />} />
        <Route path='direcciones' element={<Direcciones />} />
        <Route path='usuarios' element={<Usuarios />} />

      </Routes>

      <Footer />


    </>
  )
}
