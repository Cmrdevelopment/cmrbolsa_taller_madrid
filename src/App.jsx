
import './App.css'
import Footer from './components/Footer/Footer'
import LandingPrecio from './components/LandingPrecio/LandingPrecio'
import LandingSaberMas from './components/LandingSaberMas/LandingSaberMas'
import Landingheader from './components/Landingheader/Landingheader'
import Landinginfo from './components/Landinginfo/Landinginfo'

const App = () => {


  return (
    <>
     <Landingheader />
     <Landinginfo/>
     <LandingPrecio/>
     <LandingSaberMas/>
     <Footer/>
    </>
  )
}

export default App
