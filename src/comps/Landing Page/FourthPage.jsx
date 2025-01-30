function FourthPage({ handleResourceLoaded }){
    return(
        <section className="mt-48 pb-20">
            <h1 className="section-title scnd-text-gradient title-small leading-tight text-center mx-auto">Share and document. <br></br>Zero writing required.</h1>
            <p className="section-subtitle subtitle-small text-dark-gray text-center mt-5 mx-auto">Sharing knowledge has never been easier. Paste Gems anywhere with zero friction.</p>
            <div className="share-page-tab-list flex flex-col items-center mt-10">
                <div className="share-page-tab h-auto p-10 rounded-3xl relative overflow-clip">
                    <div className="relative z-10">
                        <p className="scnd-text-gradient text-xl tab-title">Paste in one click</p>
                        <p className="text-dark-gray mt-5 tab-subtitle">Press ↵ to paste a Gem into whatever app you're working in.</p>
                    </div>
                    <img src="https://cdn.prod.website-files.com/643e6ce50c675406e7c9e19c/644106c9dd1ac036f8e1a3ff_past-in-one.png" loading="lazy" sizes="(max-width: 479px) 83vw, (max-width: 991px) 348px, 44vw" srcSet="https://cdn.prod.website-files.com/643e6ce50c675406e7c9e19c/644106c9dd1ac036f8e1a3ff_past-in-one-p-500.png 500w, https://cdn.prod.website-files.com/643e6ce50c675406e7c9e19c/644106c9dd1ac036f8e1a3ff_past-in-one-p-800.png 800w, https://cdn.prod.website-files.com/643e6ce50c675406e7c9e19c/644106c9dd1ac036f8e1a3ff_past-in-one-p-1080.png 1080w, https://cdn.prod.website-files.com/643e6ce50c675406e7c9e19c/644106c9dd1ac036f8e1a3ff_past-in-one-p-1600.png 1600w, https://cdn.prod.website-files.com/643e6ce50c675406e7c9e19c/644106c9dd1ac036f8e1a3ff_past-in-one.png 1608w" alt="Paste in one click" className="absolute bottom-0 left-0 w-full h-auto"></img>
                </div>
                <div className="share-page-tab h-auto p-10 rounded-3xl relative overflow-clip mt-5">
                    <div className="relative z-10">
                        <p className="scnd-text-gradient text-xl tab-title">Share in a space</p>
                        <p className="text-dark-gray mt-5 tab-subtitle">Post Gems into spaces that you share with colleagues and friends.</p>
                    </div>
                    <img src="https://cdn.prod.website-files.com/643e6ce50c675406e7c9e19c/644106ca19ec7743a6cc59fd_share-in-space.png" loading="lazy" sizes="(max-width: 479px) 83vw, (max-width: 991px) 348px, 44vw" srcSet="https://cdn.prod.website-files.com/643e6ce50c675406e7c9e19c/644106ca19ec7743a6cc59fd_share-in-space-p-500.png 500w, https://cdn.prod.website-files.com/643e6ce50c675406e7c9e19c/644106ca19ec7743a6cc59fd_share-in-space-p-800.png 800w, https://cdn.prod.website-files.com/643e6ce50c675406e7c9e19c/644106ca19ec7743a6cc59fd_share-in-space-p-1080.png 1080w, https://cdn.prod.website-files.com/643e6ce50c675406e7c9e19c/644106ca19ec7743a6cc59fd_share-in-space-p-1600.png 1600w, https://cdn.prod.website-files.com/643e6ce50c675406e7c9e19c/644106ca19ec7743a6cc59fd_share-in-space.png 1608w" alt="Share in space" className="absolute bottom-0 left-0 w-full h-auto"></img>
                </div>
            </div>
            <div className="tab-desc-list grid grid-cols-1 gap-5 mt-8">
                <div className="tab-desc flex gap-2 relative">
                    <div className="tab-logo-wrapper logo-top w-6 relative left-0">
                        <img src="https://cdn.prod.website-files.com/643e6ce50c675406e7c9e19c/643f3c4e973c0365596bd793_Vector%20(27).svg" loading="lazy" alt="Remember Anything" className="w-full h-auto"></img>
                    </div>
                    <p className="text-dark-gray"><span className="tab-desc-span">Use your full potential</span> Uncover and use hidden gems that you forgot.</p>
                </div>
                <div className="tab-desc flex gap-2 relative">
                    <div className="tab-logo-wrapper logo-top w-6 relative left-0">
                        <img src="https://cdn.prod.website-files.com/643e6ce50c675406e7c9e19c/643f3c4eb2e0a745e5613973_Group%203667.svg" loading="lazy" alt="Simple to use" className="w-full h-auto"></img>
                    </div>
                    <p className="text-dark-gray"><span className="tab-desc-span">Self-organizing knowledge base.</span> A knowledge repo that nearly fills itself.</p>
                </div>
                <div className="tab-desc flex gap-2 relative">
                    <div className="tab-logo-wrapper logo-top w-6 relative left-0">
                        <img src="https://cdn.prod.website-files.com/643e6ce50c675406e7c9e19c/643f3c4ed3f665384b5d27fe_Group%203668.svg" loading="lazy" alt="Easy to setup" className="w-full h-auto"></img>
                    </div>
                    <p className="text-dark-gray"><span className="tab-desc-span">For desktop and mobile.</span> Create and access Gems wherever you are.</p>
                </div>
            </div>
        </section>
    )
}

export default FourthPage