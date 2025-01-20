import { useState } from "react"
import Popup from "./Popup"

function HeroPage({ handleResourceLoaded, isPopup, setIsPopup }){
    return(
        <section className="text-white h-auto mt-12">
            <Popup isPopup={isPopup}
            setIsPopup={setIsPopup} />
            <div className="hero-title-wrapper flex flex-col justify-center items-center leading-tight">
                <div className="flex gap-3 justify-center">
                    <h1 className="title font-medium prim-text-gradient">Your</h1>
                    <div className="hero-ai-wrapper relative">
                        <img src="https://cdn.prod.website-files.com/643e6ce50c675406e7c9e19c/644119309783e1e706dea79f_ai-word.png" loading="eager" sizes="(max-width: 479px) 158.4140625px, (max-width: 767px) 161.0859375px, (max-width: 991px) 171.765625px, 215.25px" srcSet="https://cdn.prod.website-files.com/643e6ce50c675406e7c9e19c/644119309783e1e706dea79f_ai-word-p-500.png 500w, https://cdn.prod.website-files.com/643e6ce50c675406e7c9e19c/644119309783e1e706dea79f_ai-word.png 727w" alt="AI" className="ai align-middle" onLoad={handleResourceLoaded}></img>
                    </div>
                </div>
                <h1 className="title font-medium prim-text-gradient text-center">knowledge assistant</h1>
            </div>
            <p className="hero-subtitle subtitle text-center mt-5 mx-auto">Get ready-to-use answers from all your knowledge and quit manual organization for good.</p>
            <div className="hero-btn-wrapper flex justify-center">
                <div className="hero-border inline-block mt-10 w-full rounded-xl relative">
                    <a className="hero-button block text-center p-5 rounded-xl cursor-pointer"
                    onClick={() => setIsPopup(true)}>
                        Get started for free
                    </a>
                    <div className="hero-shine"></div>
                    <div className="hero-shine shine-2"></div>
                </div>
            </div>
            <div className="hero-img-video-container relative mt-12 mx-auto overflow-hidden">
                <img src="https://cdn.prod.website-files.com/643e6ce50c675406e7c9e19c/64417925688d494a597b8fc8_Video%20Background2.png" loading="eager" sizes="(max-width: 479px) 92vw, 90vw" srcSet="https://cdn.prod.website-files.com/643e6ce50c675406e7c9e19c/64417925688d494a597b8fc8_Video%20Background2-p-500.png 500w, https://cdn.prod.website-files.com/643e6ce50c675406e7c9e19c/64417925688d494a597b8fc8_Video%20Background2-p-800.png 800w, https://cdn.prod.website-files.com/643e6ce50c675406e7c9e19c/64417925688d494a597b8fc8_Video%20Background2-p-1080.png 1080w, https://cdn.prod.website-files.com/643e6ce50c675406e7c9e19c/64417925688d494a597b8fc8_Video%20Background2-p-1600.png 1600w, https://cdn.prod.website-files.com/643e6ce50c675406e7c9e19c/64417925688d494a597b8fc8_Video%20Background2-p-2000.png 2000w, https://cdn.prod.website-files.com/643e6ce50c675406e7c9e19c/64417925688d494a597b8fc8_Video%20Background2.png 3270w" alt="" className="hero-video-img w-full h-auto" onLoad={handleResourceLoaded}></img>
                <div className="hero-video-shadow"></div>
                <div className="video-wrapper absolute">
                    <video id="video_0" src="https://gems8574389.s3.ap-southeast-2.amazonaws.com/Investor+video.mp4" poster="https://cdn.prod.website-files.com/601d22d0f98eb916ba02c138/6023a6cc4ffeb37deac65ece_placeholder%202.svg" muted autoPlay playsInline loop type="video/mp4" className="rounded-xl w-full h-auto" onLoadedData={handleResourceLoaded}></video>
                </div>
            </div>
            <p className="loved-paragraph prim-text-gradient text-center mx-auto mt-8">Loved by professionals from companies such as</p>
            <div className="hero-logo-list grid grid-cols-2 mt-10 mx-auto">
                <img src="https://cdn.prod.website-files.com/643e6ce50c675406e7c9e19c/643e724233e4a28a06992c6f_Frame%201832.svg" loading="lazy" id="w-node-_28cd4508-1c37-fa6e-0c3c-9e6b455acf14-fcead54a" alt="Bain And Company" className="logo" onLoad={handleResourceLoaded}></img>
                <img src="https://cdn.prod.website-files.com/643e6ce50c675406e7c9e19c/643e7242fc175bc9faa3a7fe_Frame%201831.svg" loading="lazy" id="w-node-_8c5124a3-2f44-d579-3eb7-423a1dc5667b-fcead54a" alt="Credit Suisse" className="logo" onLoad={handleResourceLoaded}></img>
                <img src="https://cdn.prod.website-files.com/643e6ce50c675406e7c9e19c/643e728d5aa717f2fc5eb932_Frame%201825.svg" loading="lazy" id="w-node-_10db98e5-40c9-ba0f-95ab-294b06e4f4fe-fcead54a" alt="Gartner" className="logo" onLoad={handleResourceLoaded}></img>
                <img src="https://cdn.prod.website-files.com/643e6ce50c675406e7c9e19c/643e724205234320e00747a8_Frame%201826.svg" loading="lazy" id="w-node-_334947fd-e11e-9fbc-8bac-b7b42eae4c90-fcead54a" alt="Hevard University" className="logo" onLoad={handleResourceLoaded}></img>
                <img src="https://cdn.prod.website-files.com/643e6ce50c675406e7c9e19c/643e73333267b719434be073_Frame%201823.svg" loading="lazy" id="w-node-f0911e21-80c5-e4b6-7d85-36cda4d9fbf8-fcead54a" alt="McKinsy and company" className="logo" onLoad={handleResourceLoaded}></img>
                <img src="https://cdn.prod.website-files.com/643e6ce50c675406e7c9e19c/643e7333486001fcbff0db2a_Frame%201826%20(1).svg" loading="lazy" id="w-node-c52000f3-6ed9-73bd-c51d-d8bcd7e43917-fcead54a" alt="Morgan Stalney" className="logo" onLoad={handleResourceLoaded}></img>
                <img src="https://cdn.prod.website-files.com/643e6ce50c675406e7c9e19c/643e7333547b8ca8edd0d3d9_Frame%201824.svg" loading="lazy" id="w-node-_4ad5ebc9-be36-679f-f442-1f1cc7a30c1e-fcead54a" alt="Morning star" className="logo" onLoad={handleResourceLoaded}></img>
                <img src="https://cdn.prod.website-files.com/643e6ce50c675406e7c9e19c/643e73337bf2fe411ada1d31_Frame%201825%20(1).svg" loading="lazy" id="w-node-_92236d27-c215-3e22-09db-15304034994b-fcead54a" alt="The New York Times" className="logo" onLoad={handleResourceLoaded}></img>
            </div>
        </section>
    )
}

export default HeroPage