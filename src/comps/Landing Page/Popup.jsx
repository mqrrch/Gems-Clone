import { useTransition, animated } from "@react-spring/web";

function Popup({ isPopup, setIsPopup }){
    const popupTransition = useTransition(isPopup, {
        from: { transform: "translateY(150%)" },
        enter: { transform: "translateY(0%)" },
        leave: { transform: "translateY(150%)" },
        config: { tension: 120, friction: 20 },
    })

    const overlayTransition = useTransition(isPopup, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
        config: { tension: 100, friction: 20 },
    });

    return(
        overlayTransition(
            (styles, item) => 
                item && (
                    <animated.div className='popup-overlay fixed top-0 left-0 w-full h-screen flex justify-center items-center z-20 p-5'
                    style={styles} onClick={() => setIsPopup(false)}>
                        {popupTransition(
                            (styles, item) =>
                                item && (
                                    <animated.div className='popup-container relative h-auto p-8 rounded-xl flex flex-col text-center'
                                    style={styles} onClick={e => e.stopPropagation()}>
                                        <div>
                                            <img src="https://cdn.prod.website-files.com/643e6ce50c675406e7c9e19c/6440d68e6b48da9fb92285e4_close-download.svg" loading="lazy" data-w-id="ca66f391-8b30-d39a-0521-bfb1fe2b82a4" data-btn="close" alt="Close X" className="absolute top-4 right-4 cursor-pointer" onClick={() => setIsPopup(false)}></img>
                                        </div>
                                        <div>
                                            <img src="https://cdn.prod.website-files.com/643e6ce50c675406e7c9e19c/64417b12857cf210a3e0ec84_icon2.png" loading="lazy" alt="" width="117" className="popup-star-img w-16 h-auto mx-auto rounded-xl"></img>
                                        </div>
                                        <p className="text-white text-xl mt-5">Join the waitlist</p>
                                        <p className="text-dark-gray popup-subtitle text-sm mt-3">Sign up with your email address to save your spot.</p>
                                        <form className="flex flex-col mt-6">
                                            <label htmlFor="waitlist-email"
                                            className="text-dark-gray text-sm mb-1" >
                                                Email address
                                            </label>
                                            <input type="email" id="waitlist-email" name="waitlist-email"
                                            className="popup-email w-full rounded-lg mb-5 pl-2 p-1"></input>
                                            <div className="popup-submit-border w-full inline-block rounded-lg mx-auto">
                                                <input type="submit" value='Join Waitlist' className="popup-submit w-full rounded-lg py-1 cursor-pointer"></input>
                                            </div>
                                        </form>
                                    </animated.div>
                                )
                        )}
                    </animated.div>
                )
        )
    )
}

export default Popup