import { useState } from "react";
import Footer from "../Footer";
import Loading from "../Loading";
import Navbar from "../Navbar";
import FirstPage from "./FirstPage";
import FourthPage from "./FourthPage";
import SecondPage from "./SecondPage";
import ThirdPage from "./ThirdPage";

function Blog(){
    const [isLoaded, setIsLoaded] = useState(0)
        
    const handleResourceLoaded = () => {
        setIsLoaded(prev => {
            return prev + 1
        })
    }

    return (
        <div className="h-auto flex flex-col justify-center p-4">
            <Loading isLoaded={isLoaded} />
            <Navbar handleResourceLoaded={handleResourceLoaded} />
            <div className="blog-contents m-auto">
                <FirstPage />
                <SecondPage handleResourceLoaded={handleResourceLoaded} />
                <ThirdPage handleResourceLoaded={handleResourceLoaded} />
                <FourthPage />
            </div>
            <Footer handleResourceLoaded={handleResourceLoaded} />
        </div>
    )
}

export default Blog