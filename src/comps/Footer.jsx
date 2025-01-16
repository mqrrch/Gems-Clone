function Footer(){
    return(
        <footer className="mt-64">
            <div className="relative">
                <img src="https://cdn.prod.website-files.com/643e6ce50c675406e7c9e19c/6441238f19ec77c3e5ce2969_footer-stars.svg" loading="lazy" alt="Background stars" className="stars-group absolute w-full h-auto opacity-20 p-8"></img>
                <img src="https://cdn.prod.website-files.com/643e6ce50c675406e7c9e19c/64417b12857cf210a3e0ec84_icon2.png" loading="lazy" alt="" width="117" className="star-img relative w-16 h-auto mx-auto rounded-3xl"></img>
            </div>
            <h1 className="footer-title scnd-text-gradient text-3xl text-center px-5 pb-1 mt-5">Start scooping out <br></br>gems today.</h1>
            <div className="mt-10 flex justify-center">
                <div className="footer-btn text-dark-gray inline-block w-full rounded-lg">
                    <a className="bg-black block text-center rounded-lg py-1">Get started for free</a>
                </div>
            </div>
            <div className="footer-line w-full mt-40"></div>
            <div className="footer-wrapper text-center">
                <div className="footer-logo-wrapper flex justify-center mt-10">
                    <img src="https://cdn.prod.website-files.com/643e6ce50c675406e7c9e19c/643f77a8d3f66514cf61dac9_GEMS-BETA.svg" loading="lazy" alt="Gems Beta Logo"></img>
                </div>
                <div className="footer-links flex flex-col mt-10 gap-6 pb-16 text-dark-gray text-sm">
                    <a>Home</a>
                    <a>Features</a>
                    <a>Contact</a>
                    <a>Legal</a>
                    <a>LinkedIn</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer