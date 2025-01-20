function SecondPage({ handleResourceLoaded }){
    return(
        <section className="mt-48" id="features">
            <h1 className="section-title scnd-text-gradient title-small text-center mx-auto">Remember anything. <br></br>Just ask a question.</h1>
            <p className="section-subtitle subtitle-small text-center mt-5 mx-auto">Gems is the shortcut for all your knowledge. Just summon Gems and ask any question.</p>
            <div className="remember-page-tab-list flex flex-col items-center mt-10">
                <div className="remember-page-tab h-auto p-10 rounded-3xl relative overflow-clip">
                    <div className="relative z-10">
                        <p className="scnd-text-gradient text-xl tab-title">One simple shortcut</p>
                        <p className="text-dark-gray mt-5 tab-subtitle">No more 100s of apps, no more folders, no more mental overload.</p>
                    </div>
                    <img src="https://cdn.prod.website-files.com/643e6ce50c675406e7c9e19c/64410fe003c9010bc9518657_instant-mobile.png" loading="lazy" sizes="(max-width: 479px) 83vw, (max-width: 991px) 348px, 100vw" srcSet="https://cdn.prod.website-files.com/643e6ce50c675406e7c9e19c/64410fe003c9010bc9518657_instant-mobile-p-500.png 500w, https://cdn.prod.website-files.com/643e6ce50c675406e7c9e19c/64410fe003c9010bc9518657_instant-mobile-p-800.png 800w, https://cdn.prod.website-files.com/643e6ce50c675406e7c9e19c/64410fe003c9010bc9518657_instant-mobile.png 1047w" alt="Get instant answers" className="absolute w-full h-auto" onLoad={handleResourceLoaded}></img>
                    <img src="https://cdn.prod.website-files.com/643e6ce50c675406e7c9e19c/64411d8bf3e5b612669fc741_one-simple-shoutcut-2.png" loading="lazy" sizes="(max-width: 991px) 100vw, 90vw" srcSet="https://cdn.prod.website-files.com/643e6ce50c675406e7c9e19c/64411d8bf3e5b612669fc741_one-simple-shoutcut-2-p-500.png 500w, https://cdn.prod.website-files.com/643e6ce50c675406e7c9e19c/64411d8bf3e5b612669fc741_one-simple-shoutcut-2-p-800.png 800w, https://cdn.prod.website-files.com/643e6ce50c675406e7c9e19c/64411d8bf3e5b612669fc741_one-simple-shoutcut-2-p-1080.png 1080w, https://cdn.prod.website-files.com/643e6ce50c675406e7c9e19c/64411d8bf3e5b612669fc741_one-simple-shoutcut-2-p-1600.png 1600w, https://cdn.prod.website-files.com/643e6ce50c675406e7c9e19c/64411d8bf3e5b612669fc741_one-simple-shoutcut-2-p-2000.png 2000w, https://cdn.prod.website-files.com/643e6ce50c675406e7c9e19c/64411d8bf3e5b612669fc741_one-simple-shoutcut-2-p-2600.png 2600w, https://cdn.prod.website-files.com/643e6ce50c675406e7c9e19c/64411d8bf3e5b612669fc741_one-simple-shoutcut-2-p-3200.png 3200w, https://cdn.prod.website-files.com/643e6ce50c675406e7c9e19c/64411d8bf3e5b612669fc741_one-simple-shoutcut-2.png 3294w" alt="One simple shortcut" className="absolute w-full h-auto hidden" onLoad={handleResourceLoaded}></img>
                </div>
                <div className="remember-page-tab h-auto p-10 rounded-3xl relative overflow-clip mt-5">
                    <div className="relative z-10">
                        <p className="scnd-text-gradient text-xl tab-title">Ask in your own words...</p>
                        <p className="text-dark-gray mt-5 tab-subtitle">Ask Gems like how you'd ask a friend. It's fast and feels truly effortless.</p>
                    </div>
                    <img src="https://cdn.prod.website-files.com/643e6ce50c675406e7c9e19c/644106cc8f320e60c1d6fb02_ask-words.png" loading="lazy" sizes="(max-width: 479px) 390px, (max-width: 991px) 400px, 610px" srcSet="https://cdn.prod.website-files.com/643e6ce50c675406e7c9e19c/644106cc8f320e60c1d6fb02_ask-words-p-500.png 500w, https://cdn.prod.website-files.com/643e6ce50c675406e7c9e19c/644106cc8f320e60c1d6fb02_ask-words-p-800.png 800w, https://cdn.prod.website-files.com/643e6ce50c675406e7c9e19c/644106cc8f320e60c1d6fb02_ask-words-p-1080.png 1080w, https://cdn.prod.website-files.com/643e6ce50c675406e7c9e19c/644106cc8f320e60c1d6fb02_ask-words-p-1600.png 1600w, https://cdn.prod.website-files.com/643e6ce50c675406e7c9e19c/644106cc8f320e60c1d6fb02_ask-words.png 1849w" alt="Ask in your own words" className="absolute scale-125 w-full h-auto mt-20" onLoad={handleResourceLoaded}></img>
                </div>
                <div className="remember-page-tab h-auto p-10 rounded-3xl relative overflow-clip mt-5">
                    <div className="relative z-10">
                        <p className="scnd-text-gradient text-xl tab-title">...or in somebody else's</p>
                        <p className="text-dark-gray mt-5 tab-subtitle">Clip any text to provide context for what you ask Gems.</p>
                    </div>
                    <img src="https://cdn.prod.website-files.com/643e6ce50c675406e7c9e19c/644106cccf797b5e4feef86e_somebody-lese.png" loading="lazy" sizes="(max-width: 479px) 83vw, (max-width: 991px) 348px, 44vw" srcSet="https://cdn.prod.website-files.com/643e6ce50c675406e7c9e19c/644106cccf797b5e4feef86e_somebody-lese-p-500.png 500w, https://cdn.prod.website-files.com/643e6ce50c675406e7c9e19c/644106cccf797b5e4feef86e_somebody-lese-p-800.png 800w, https://cdn.prod.website-files.com/643e6ce50c675406e7c9e19c/644106cccf797b5e4feef86e_somebody-lese-p-1080.png 1080w, https://cdn.prod.website-files.com/643e6ce50c675406e7c9e19c/644106cccf797b5e4feef86e_somebody-lese-p-1600.png 1600w, https://cdn.prod.website-files.com/643e6ce50c675406e7c9e19c/644106cccf797b5e4feef86e_somebody-lese.png 1611w" alt="Someone else words" className="absolute w-full h-auto" onLoad={handleResourceLoaded}></img>
                </div>
            </div>
            <div className="tab-desc-list grid grid-cols-1 gap-5 mt-8">
                <div className="tab-desc flex gap-2 relative">
                    <div className="tab-logo-wrapper logo-top w-6 relative left-0">
                        <img src="https://cdn.prod.website-files.com/643e6ce50c675406e7c9e19c/643f09a89e0364347eb59ae8_Vector%20(21).svg" loading="lazy" alt="Remember Anything" className="w-full h-auto" onLoad={handleResourceLoaded}></img>
                    </div>
                    <p className="text-dark-gray"><span className="tab-desc-span">Remember anything.</span> Instantly. And without the cognitive overload.</p>
                </div>
                <div className="tab-desc flex gap-2 relative">
                    <div className="tab-logo-wrapper logo-top w-6 relative left-0">
                        <img src="https://cdn.prod.website-files.com/643e6ce50c675406e7c9e19c/643f0ae61f8405022e845156_Group%203665.svg" loading="lazy" alt="Simple to use" className="w-full h-auto" onLoad={handleResourceLoaded}></img>
                    </div>
                    <p className="text-dark-gray"><span className="tab-desc-span">Simple to use.</span> Having the perfect answer is just a question away.</p>
                </div>
                <div className="tab-desc flex gap-2 relative">
                    <div className="tab-logo-wrapper logo-top w-6 relative left-0">
                        <img src="https://cdn.prod.website-files.com/643e6ce50c675406e7c9e19c/643f0ae6084d562f35269489_Vector%20(22).svg" loading="lazy" alt="Easy to setup" className="w-full h-auto" onLoad={handleResourceLoaded}></img>
                    </div>
                    <p className="text-dark-gray"><span className="tab-desc-span">Easy to set up.</span> Connect your tools in seconds. It's zero upkeep from here.</p>
                </div>
            </div>
        </section>
    )
}

export default SecondPage