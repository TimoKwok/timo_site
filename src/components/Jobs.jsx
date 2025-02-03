import React from 'react'
import bgImage from "/assets/Webbackground2.png"; // Import the image

export const Jobs = () => {
    return (
        <section className="h-[100vh] w-full flex flex-col relative bg-white p-8" style={{ backgroundImage: `url(${bgImage})` }}>
            {/* Section Title */}
            <div className="hero_tag text-black text-2xl font-bold mb-6 underline">
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
                        I joined theScore in May 2024 as a QA Analyst for the Promotions Team, where I worked closely with developers to ensure the smooth rollout of new features. Using a Kanban board in Jira, I tracked tickets, collaborated in daily standup meetings, and helped maintain the quality of promotions across multiple platforms. I tested well over 100 tickets for theScore, ESPN Bet, and Hollywood Casino, making sure that the promotional features worked seamlessly across different environments as we rolled out multiple different features for our apps. Whether it was regression, functional, edge, smoke, or even production testing, I ensured reliability and high performance. One of my proudest achievements as a QA was my contribution to the company’s “Refer a Friend” feature. This was a project laboured over for a whole month, and during this time I was able to  identify and create tickets for over 50 bugs, ensuring to keep close communication with developers. We conducted bi-weely regression testing and I even had the opportunity to test our referral feature work on the company's production builds. We were able to launch this addition with no hiccups or issues, and my contribution led to the completion of a large milestone for the company and a feature adopted by thousands of users within the first few hours of its launch!
                        </p>
                    </blockquote>
                </div>
            </div>
        </section>
    )
}