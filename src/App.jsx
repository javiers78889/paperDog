
import { Footer } from './components/Footer'
import { Heroe } from './widgets/HeroeItems/Heroe'
import { Loading } from './widgets/Loading/Loading'
import { Inicio } from './components/Inicio'
import { Route, Routes } from 'react-router-dom'
import { Tracking } from './widgets/Tracking/Tracking'
import { UserContext } from './Context/UserContext'
import { useContext } from 'react'
import { Login } from './components/Login'
import { Profile } from './components/Profile'
import { Recovery } from './components/Recovery'



function App() {
  const { isLoading } = useContext(UserContext)

  return (
    <>

      {isLoading ? (
        <Loading />
      ) : (
        <>

          <Routes>
            <Route path='/' element={
              <>
                <Heroe />
                <Inicio />
                <Footer />
              </>
            } />

            <Route path='/tracking' element={
              <>
                <Heroe />
                <Tracking />
                <Footer />
              </>
            } />
            <Route path='/login' element={<><Login /> <Footer /></>} />
            <Route path='/profile/*' element={<Profile />} />
            <Route path='/recovery' element={<Recovery />} />


          </Routes>

        </>
      )}
    </>
  )
}

export default App
