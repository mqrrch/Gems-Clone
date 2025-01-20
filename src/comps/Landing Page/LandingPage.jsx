import Navbar from "../Navbar"
import HeroPage from "./HeroPage"
import SecondPage from "./SecondPage"
import ThirdPage from "./ThirdPage"
import FourthPage from "./FourthPage"
import Footer from "../Footer"
import Loading from "../Loading"
import { useState } from "react"
import FooterStar from "../FooterStar"

function LandingPage(){
    const [isPopup, setIsPopup] = useState(false)
    const [isLoaded, setIsLoaded] = useState(0)
    
    const handleResourceLoaded = () => {
        setIsLoaded(prev => {
            return prev + 1
        })
    }
    return (
        <div className='h-auto flex flex-col justify-center p-4'>
            <Loading isLoaded={isLoaded} />
            <Navbar handleResourceLoaded={handleResourceLoaded} />
            <HeroPage handleResourceLoaded={handleResourceLoaded} isPopup={isPopup} setIsPopup={setIsPopup} />
            <SecondPage handleResourceLoaded={handleResourceLoaded} />
            <ThirdPage handleResourceLoaded={handleResourceLoaded} />
            <FourthPage handleResourceLoaded={handleResourceLoaded} />
            <FooterStar handleResourceLoaded={handleResourceLoaded}  isPopup={isPopup} setIsPopup={setIsPopup} />
            <Footer handleResourceLoaded={handleResourceLoaded} />
        </div>
    )
}

export default LandingPage