function ThirdPage({ handleResourceLoaded }){
    return(
        <section>
            <h1 className="blog-title-2">How does Gems work?</h1>
            <p>&zwj;</p>
            <p className="text-dark-gray">Enter Gems. Gems is your personal AI knowledge assistant. Just summon it via the CMD + G shortcut, type in your question in natural language and you’ll get a complete, synthesized and ready-to-use answer based on all of the information that’s in all of your apps.</p>
            <p>&zwj;</p>
            <div>
                <img src="https://cdn.prod.website-files.com/643e6ce50c675406e7c9e19c/64468d81595d1a4877e2c7f0_ProductHunt.png" loading="lazy" alt="" onLoad={handleResourceLoaded}></img>
            </div>
            <p>&zwj;</p>
            <p>&zwj;</p>
            <p className="text-dark-gray">The answer is a written-out text containing sources and ways to dig deeper.</p>
            <p>&zwj;</p>
            <div>
                <img src="https://cdn.prod.website-files.com/643e6ce50c675406e7c9e19c/64468d93571aceddc5c42797_ProductHunt-2.png" loading="lazy" alt="" onLoad={handleResourceLoaded}></img>
            </div>
            <p>&zwj;</p>
            <p>&zwj;</p>
            <p className="text-dark-gray">What can you ask Gems? Literally anything you want to know:</p>
            <ul className="text-dark-gray blog-list pl-10">
                <li>“Pull up my all notes on Michaela”</li>
                <li>“What should I learn next about software development?”</li>
                <li>...</li>
            </ul>
            <p>&zwj;</p>
            <div>
                <img src="https://cdn.prod.website-files.com/643e6ce50c675406e7c9e19c/64468dd61fad0a6e3d0c9c26_ProductHunt-1.png" loading="lazy" alt="" onLoad={handleResourceLoaded}></img>
            </div>
            <p>&zwj;</p>
            <p>&zwj;</p>
            <p className="text-dark-gray">You don’t even have to provide a prompt yourself. Instead, you can clip text and use that clipped text to augment your prompt.</p>
            <p>&zwj;</p>
            <div>
                <img src="https://cdn.prod.website-files.com/643e6ce50c675406e7c9e19c/64468dffd6c414cf8d1f121f_ProductHunt-4.png" loading="lazy" alt="" onLoad={handleResourceLoaded}></img>
            </div>
            <p>&zwj;</p>
            <p>&zwj;</p>
        </section>
    )
}

export default ThirdPage