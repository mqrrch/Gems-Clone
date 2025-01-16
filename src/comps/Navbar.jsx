function Navbar(){
    return(
        <nav className="mt-8 flex px-6">
            <a className="nav-logo flex justify-center pr-6">
                <img src="https://cdn.prod.website-files.com/643e6ce50c675406e7c9e19c/643f77a8d3f66514cf61dac9_GEMS-BETA.svg" loading="lazy" alt="Gems Beta Logo"></img>
            </a>
            <div className="nav-links space-x-6 ml-6">
                <a className="text-dark-gray text-sm font-light">Features</a>
                <a className="text-dark-gray text-sm font-light">Blog</a>
            </div>
        </nav>
    )
}

export default Navbar