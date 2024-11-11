
import { Footer } from './components/Footer'
import { Heroe } from './widgets/HeroeItems/Heroe'
import { Slider } from './widgets/Slider/Slider'
import { ConteoPersonas } from './widgets/ConteoPersonas'
import { Planes } from './widgets/Planes'
import { Recomended } from './widgets/Recomended'
import { Servicios } from './widgets/Servicios'
import { Loading } from './widgets/Loading/Loading'
import { useLoading } from './hooks/useLoading'
import { Inicio } from './components/Inicio'
import { Route, Routes } from 'react-router-dom'
import { Tracking } from './widgets/Tracking/Tracking'
import { UserContext } from './Context/UserContext'
import { UserProvider } from './Context/UserProvider'
import { useContext } from 'react'



function App() {
  const { isLoading } = useContext(UserContext)

  return (
    <>
     
        {isLoading ? (
          <Loading />
        ) : (
          <>
            <Heroe />
            <Routes>
              <Route path='/' element={<Inicio />} />
              <Route path='/tracking' element={<Tracking />} />

            </Routes>
            <Footer />
          </>
        )}
    </>
  )
}

export default App
