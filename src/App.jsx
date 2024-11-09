
import { Footer } from './components/Footer'
import { Heroe } from './widgets/HeroeItems/Heroe'
import { Slider } from './widgets/Slider/Slider'
import { ConteoPersonas } from './widgets/ConteoPersonas'
import { Planes } from './widgets/Planes'
import { Recomended } from './widgets/Recomended'
import { Servicios } from './widgets/Servicios'
import { Loading } from './widgets/Loading/Loading'
import { useLoading } from './hooks/useLoading'



function App() {
  const{isLoading}= useLoading()

  return (
    <>
      {isLoading ? (
        <Loading/>
      ) : (
        <div>
          <Heroe />
          <Slider />
          <Servicios />
          <Planes />
          <ConteoPersonas />
          <Recomended />
          <Footer />
        </div>
      )}
    </>
  )
}

export default App
