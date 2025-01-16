import './App.css'
import Navbar from './comps/Navbar'
import HeroPage from './comps/HeroPage'
import SecondPage from './comps/SecondPage'
import ThirdPage from './comps/ThirdPage'
import FourthPage from './comps/FourthPage'
import Footer from './comps/Footer'

function App() {
  return(
    <div className='h-auto flex flex-col justify-center p-4'>
      <Navbar />
      <HeroPage />
      <SecondPage />
      <ThirdPage />
      <FourthPage />
      <Footer />
    </div>
  )
}

export default App