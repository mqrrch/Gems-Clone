function ThirdPage({ handleResourceLoaded }){
    return (
        <section className="mt-48">
            <h1 className="section-title scnd-text-gradient title-small leading-tight text-center mx-auto">More answers. <br></br>No more organization.</h1>
            <p className="section-subtitle subtitle-small text-dark-gray text-center mt-5 mx-auto">Get synthesized, ready-to-use answers based on everything you and your team have ever known.</p>
            <div className="answers-page-tab-list flex flex-col items-center mt-10">
                <div className="answers-page-tab h-auto p-10 rounded-3xl relative overflow-clip">
                    <div className="relative z-10">
                        <p className="scnd-text-gradient text-xl tab-title">Get instant answers</p>
                        <p className="text-dark-gray mt-5 tab-subtitle">Gems creates structured, written-out answers. We call each answer a Gem.</p>
                    </div>
                    <img src="https://cdn.prod.website-files.com/643e6ce50c675406e7c9e19c/64410fe003c9010bc9518657_instant-mobile.png" loading="lazy" sizes="(max-width: 479px) 83vw, (max-width: 991px) 348px, 100vw" srcSet="https://cdn.prod.website-files.com/643e6ce50c675406e7c9e19c/64410fe003c9010bc9518657_instant-mobile-p-500.png 500w, https://cdn.prod.website-files.com/643e6ce50c675406e7c9e19c/64410fe003c9010bc9518657_instant-mobile-p-800.png 800w, https://cdn.prod.website-files.com/643e6ce50c675406e7c9e19c/64410fe003c9010bc9518657_instant-mobile.png 1047w" alt="Get instant answers" className="absolute w-full h-auto" onLoad={handleResourceLoaded}></img>
                    <img src="https://cdn.prod.website-files.com/643e6ce50c675406e7c9e19c/64413d2818d4a0be85eb3a8a_get-intant.png" loading="lazy" id="w-node-_6c6ce2e5-81fe-9946-f7dc-d12810507f87-fcead54a" sizes="(max-width: 991px) 100vw, 90vw" alt="Get instant answers" srcSet="https://cdn.prod.website-files.com/643e6ce50c675406e7c9e19c/64413d2818d4a0be85eb3a8a_get-intant-p-500.png 500w, https://cdn.prod.website-files.com/643e6ce50c675406e7c9e19c/64413d2818d4a0be85eb3a8a_get-intant-p-800.png 800w, https://cdn.prod.website-files.com/643e6ce50c675406e7c9e19c/64413d2818d4a0be85eb3a8a_get-intant-p-1080.png 1080w, https://cdn.prod.website-files.com/643e6ce50c675406e7c9e19c/64413d2818d4a0be85eb3a8a_get-intant-p-1600.png 1600w, https://cdn.prod.website-files.com/643e6ce50c675406e7c9e19c/64413d2818d4a0be85eb3a8a_get-intant-p-2000.png 2000w, https://cdn.prod.website-files.com/643e6ce50c675406e7c9e19c/64413d2818d4a0be85eb3a8a_get-intant-p-2600.png 2600w, https://cdn.prod.website-files.com/643e6ce50c675406e7c9e19c/64413d2818d4a0be85eb3a8a_get-intant-p-3200.png 3200w, https://cdn.prod.website-files.com/643e6ce50c675406e7c9e19c/64413d2818d4a0be85eb3a8a_get-intant.png 3294w" className="absolute w-full h-auto" onLoad={handleResourceLoaded}></img>
                </div>
                <div className="answers-page-tab h-auto p-10 rounded-3xl relative overflow-clip mt-5">
                    <div className="relative z-10">
                        <p className="scnd-text-gradient text-xl tab-title">Connect your team's entire knowledge</p>
                        <p className="text-dark-gray mt-5 tab-subtitle">Gems searches all your knowledge to formulate a synthesized answer.</p>
                    </div>
                    <img src="https://cdn.prod.website-files.com/643e6ce50c675406e7c9e19c/64410fe15cbec31b51c3eb92_connect--team-mobile.png" loading="lazy" sizes="(max-width: 479px) 83vw, (max-width: 991px) 348px, 100vw" srcSet="https://cdn.prod.website-files.com/643e6ce50c675406e7c9e19c/64410fe15cbec31b51c3eb92_connect--team-mobile-p-500.png 500w, https://cdn.prod.website-files.com/643e6ce50c675406e7c9e19c/64410fe15cbec31b51c3eb92_connect--team-mobile-p-800.png 800w, https://cdn.prod.website-files.com/643e6ce50c675406e7c9e19c/64410fe15cbec31b51c3eb92_connect--team-mobile.png 1044w" alt="Connect your team's knowledge" className="absolute w-full h-auto" onLoad={handleResourceLoaded}></img>
                </div>
                <div className="answers-page-tab h-auto p-10 rounded-3xl relative overflow-clip mt-5">
                    <div className="relative z-10">
                        <p className="scnd-text-gradient text-xl tab-title">Never lose sources</p>
                        <p className="text-dark-gray mt-5 tab-subtitle">Gems provides sources with any answer, so you can go back to prove things any time.</p>
                    </div>
                    <img src="https://cdn.prod.website-files.com/643e6ce50c675406e7c9e19c/64410fe15a7a3e3e762f2e9a_never-loose-mobile.png" loading="lazy" sizes="(max-width: 479px) 83vw, (max-width: 991px) 348px, 100vw" srcSet="https://cdn.prod.website-files.com/643e6ce50c675406e7c9e19c/64410fe15a7a3e3e762f2e9a_never-loose-mobile-p-500.png 500w, https://cdn.prod.website-files.com/643e6ce50c675406e7c9e19c/64410fe15a7a3e3e762f2e9a_never-loose-mobile-p-800.png 800w, https://cdn.prod.website-files.com/643e6ce50c675406e7c9e19c/64410fe15a7a3e3e762f2e9a_never-loose-mobile.png 1044w" alt="Never loose sources" className="absolute w-full h-auto" onLoad={handleResourceLoaded}></img>
                </div>
            </div>
            <div className="tab-desc-list grid grid-cols-1 gap-5 mt-8">
                <div className="tab-desc flex gap-2 relative">
                    <div className="tab-logo-wrapper logo-top w-6 relative left-0">
                        <img src="https://cdn.prod.website-files.com/643e6ce50c675406e7c9e19c/643f3a0b5ecc6b59c349da9d_Vector%20(25).svg" loading="lazy" alt="Remember Anything" className="w-full h-auto" onLoad={handleResourceLoaded}></img>
                    </div>
                    <p className="text-dark-gray"><span className="tab-desc-span">All knowledge centalized.</span> Get it all into one place without any work.</p>
                </div>
                <div className="tab-desc flex gap-2 relative">
                    <div className="tab-logo-wrapper logo-top w-6 relative left-0">
                        <img src="https://cdn.prod.website-files.com/643e6ce50c675406e7c9e19c/643f3a0bfa7cc221d11e6e62_Vector%20(26).svg" loading="lazy" alt="Simple to use" className="w-full h-auto" onLoad={handleResourceLoaded}></img>
                    </div>
                    <p className="text-dark-gray"><span className="tab-desc-span">See connections.</span> Understand how your entire knowledge is connected.</p>
                </div>
                <div className="tab-desc flex gap-2 relative">
                    <div className="tab-logo-wrapper logo-top w-6 relative left-0">
                        <img src="https://cdn.prod.website-files.com/643e6ce50c675406e7c9e19c/643f3a0ab2e0a7c4e8611a07_Group%203666.svg" loading="lazy" alt="Easy to setup" className="w-full h-auto" onLoad={handleResourceLoaded}></img>
                    </div>
                    <p className="text-dark-gray"><span className="tab-desc-span">No manual organization.</span> Be perfectly organized with zero effort.</p>
                </div>
            </div>
        </section>
    )
}

export default ThirdPage