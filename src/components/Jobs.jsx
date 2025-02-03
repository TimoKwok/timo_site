import React from 'react'
import bgImage from "/assets/Webbackground2.png"; // Import the image

export const Jobs = () => {
    return (
        <section className="h-[90vh] w-full flex flex-col relative bg-white p-8" style={{ backgroundImage: `url(${bgImage})` }}>
            {/* Section Title */}
            <div className="hero_tag text-black text-2xl font-bold mb-6">
                Professional Experience
            </div>

            {/* Content Layout */}
            <div className="flex flex-row items-center gap-8">
                {/* Image Section */}
                <div className="w-1/3">
                <figure class="max-w-lg">

                    <img 
                        className="rounded-lg h-auto w-full" 
                        src="/assets/scorephoto1.jpg" 
                        alt="Experience Image" 
                    />
                    <figcaption class="mt-2 text-sm text-center text-black italic text-bold">Co-op Gammification Challenge Crew</figcaption>
                </figure>
                </div>

                {/* Job Description */}
                <div className="w-2/3">
                    <img className="h-24 w-24 rounded-lg mb-8 mb-2" src='/assets/score_logo.png'/>
                    <h className="text-lg font-bold italic">
                        TheScore, Software QA Analyst, Promotions Team
                        <p>
                        May 2024 - December 2024
                        </p>
                    </h>
                    <blockquote className="mt-2 leading-relaxed border-black border-l-4 pl-4 text-left text-black font-medium">
                        <p className="mb-4">
                            On a professional level, I’ve also gained valuable, hands-on experience for software development practices after my time at theScore. I worked as a QA analyst for the promotions team, where I got the chance to test and find bugs for their upcoming features. I participated in daily standups, created concise testing notes, filed bugs, and made lasting connections with some amazing people! 
                        </p>
                    </blockquote>
                </div>
            </div>
        </section>
    )
}