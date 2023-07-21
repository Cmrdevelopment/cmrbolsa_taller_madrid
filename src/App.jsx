
import './App.css'
import Footer from './components/Footer/Footer'
import LandingPrecio from './components/LandingPrecio/LandingPrecio'
import Landingheader from './components/Landingheader/Landingheader'
import Landinginfo from './components/Landinginfo/Landinginfo'

const App = () => {


  return (
    <>
     <Landingheader />
     <Landinginfo/>
     <LandingPrecio/>
     <Footer/>
    </>
  )
}

export default App
