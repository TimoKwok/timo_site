import React from 'react'

export const About = () => {
    return (
        <section className='min-h-screen w-full flex flex-col relative bg-white'>
            <div className='hero_tag text-black'>
            All About Me
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between">

                <div className="h-auto mb-4 max-w-lg flex-shrink-0 sm:mr-6">
                    <img 
                        src="/assets/pfp1.jpg" 
                        alt="Timo's Profile Picture"
                        className="rounded-full w-82 ml-16" 
                    />
                </div>

                <div className="max-w-2xl ml-32 mx-auto mb-5">
                    <p className="text-2xl font-generalsans text-black font-medium italic mb-4">
                        I'ts Nice To Finally Meet You!
                    </p>
                    <blockquote className="leading-relaxed border-black border-l-4 pl-4 text-left text-black font-medium">
                        <p className='mb-4'>
                        My name is Timo Kwok, I'm a fourth year bilingual computer science student, studying my degree at Toronto Metropolitan Univeristy. What started as natural expectation for my program became an incredible passion of mine that I genuinely love and enjoy. Over the years I’ve built a strong understanding of data structures, algorithms, creative problem solving, testing, and I’ve become acquainted with a wide variety of languages/frameworks such as Java, Python, Elixir, CSS, C#, React, and Phoenix to name a few. Whether it’s building a cooking website using React, creating a program to determine the winner of a War game in Elixir, or adapting one of my favouitre fictional characters into a responsive Discord bot, I adore tackling new projects and challenges for myself!  
                        </p>
                        <p className='mb-4'>
                        On a professional level, I’ve also gained valuable, hands on experience for software development practices after my time at theScore. I worked as a QA analyst for the promotions team, where I got the chance to test and find bugs for their upcoming features. I participated in daily standups, created concise testing notes, filed bugs, and made lasting connections with some amazing people! 
                        </p>
                        <p className='mb-4'>
                        That’s pretty much me! Feel free to browse my projects listed below, more details from my time at theScore, or even some of my hobbies and interests at the bottom.
                        </p>
                    </blockquote>
                </div>
            </div>
        </section>
    )
}