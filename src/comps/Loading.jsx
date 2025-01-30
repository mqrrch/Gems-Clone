import { useEffect, useState } from "react"

function Loading({ isLoaded }){
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        if(isLoaded > 0){
            const timer = setTimeout(() => {
                setIsLoading(false)
            }, 7000)

            return () => clearTimeout(timer)
        }
    }, [isLoaded])

    return(
        isLoading ? (
            <div className="loading-screen fixed flex justify-center items-center top-0 left-0 w-full h-screen z-30">
                <div>
                    <img src="https://cdn.prod.website-files.com/643e6ce50c675406e7c9e19c/643f77a8d3f66514cf61dac9_GEMS-BETA.svg" loading="lazy" alt="Gems Beta Logo" className="loading-img w-full h-auto"></img>
                </div>
            </div>
        ) : (
            <div className="loading-screen loading-out fixed flex justify-center items-center top-0 left-0 w-full h-screen z-30">
                <div>
                    <img src="https://cdn.prod.website-files.com/643e6ce50c675406e7c9e19c/643f77a8d3f66514cf61dac9_GEMS-BETA.svg" loading="lazy" alt="Gems Beta Logo" className="loading-img w-full h-auto"></img>
                </div>
            </div>
        )
    )
}

export default Loading