function SecondPage({ handleResourceLoaded }){
    return(
        <section>
            <h1 className="blog-title-2">What problem is it solving?</h1>
            <p>&zwj;</p>
            <p className="text-dark-gray">Knowledge is our biggest lever as knowledge workers. Unfortunately though, accessing knowledge in the digital realm is broken. We spend about 19% of our time searching for information (McKinsey, 2012). This is AN ENTIRE DAY of our workweek.</p>
            <p>&zwj;</p>
            <div>
                <img src="https://cdn.prod.website-files.com/643e6ce50c675406e7c9e19c/64468de2d13fad7d2723c3b4_ProductHunt-3.png" loading="lazy" alt="" onLoad={handleResourceLoaded}></img>
            </div>
            <p>&zwj;</p>
            <p className="text-dark-gray">This is because retrieving knowledge involves so much friction. Most of our knowledge is scattered across apps like Google Drive, Slack, Email & co. So we forget where things are and sometimes we even forget that some information exists in our tools altogether. And whenever we add new information, it’s quite some work to put it into the right place and document it properly.</p>
            <p>&zwj;</p>
            <p className="text-dark-gray">While pioneers like Tiago Forte, Dan Shipper and Nick Milo have come up with best-in-class systems to manage oneself, it’s still all manual effort. We spend time structuring, sorting, filtering and tagging information and yet still waste time browsing and searching whenever we need to access our knowledge.</p>
            <p>&zwj;</p>
            <p className="text-dark-gray">With those crazy advancements in AI, we can finally make all that manual organization a thing of the past.</p>
            <p>&zwj;</p>
            <p>&zwj;</p>
        </section>
    )
}

export default SecondPage