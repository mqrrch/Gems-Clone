function FooterStar({ handleResourceLoaded, isPopup, setIsPopup }){
    return(
        <>
            <div className="relative mt-32">
                <img src="https://cdn.prod.website-files.com/643e6ce50c675406e7c9e19c/6441238f19ec77c3e5ce2969_footer-stars.svg" loading="lazy" alt="Background stars" className="stars-group absolute w-full h-auto opacity-20 p-8" onLoad={handleResourceLoaded}></img>
                <img src="https://cdn.prod.website-files.com/643e6ce50c675406e7c9e19c/64417b12857cf210a3e0ec84_icon2.png" loading="lazy" alt="" width="117" className="star-img relative w-16 h-auto mx-auto rounded-3xl" onLoad={handleResourceLoaded}></img>
            </div>
            <h1 className="footer-title scnd-text-gradient text-3xl text-center px-5 pb-1 mt-5">Start scooping out <br></br>gems today.</h1>
            <div className="mt-10 flex justify-center">
                <div className="footer-btn text-dark-gray inline-block w-full rounded-lg">
                    <a className="bg-black block text-center rounded-lg py-1 cursor-pointer"
                    onClick={() => setIsPopup(true)}>
                        Get started for free
                    </a>
                </div>
            </div>
        </>
    )
}

export default FooterStar