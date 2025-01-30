function Footer({ handleResourceLoaded }){
    return(
        <footer className="mt-16">
            <div className="footer-line w-full mt-40"></div>
            <div className="footer-wrapper text-center">
                <a className="footer-logo-wrapper flex justify-center mt-10" href="/Gems-Clone/">
                    <img src="https://cdn.prod.website-files.com/643e6ce50c675406e7c9e19c/643f77a8d3f66514cf61dac9_GEMS-BETA.svg" loading="lazy" alt="Gems Beta Logo"></img>
                </a>
                <div className="footer-links flex flex-col mt-10 gap-6 pb-16 text-dark-gray text-sm">
                    <a href="/Gems-Clone/">Home</a>
                    <a href="/Gems-Clone/#features">Features</a>
                    <a className="cursor-pointer">Contact</a>
                    <a className="cursor-pointer">Legal</a>
                    <a className="cursor-pointer">LinkedIn</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer