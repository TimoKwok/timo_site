import React from 'react'
export const NavBar = () => {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-black/90">
            <div className="max-w-7xl">
                <div className="flex justify-between items-center py-5 mx-auto c-space">
                    <a href="/" className="text-neutral-400 font-bold text-xl hover:text-white transition-colors">
                        Timothy Nolan Kwok
                    </a>
                    <div className="flex space-x-20"> {/* Add flex and spacing here */}
                        <button onClick={() => window.open("https://github.com/TimoKwok", "_blank")} className="w-6 h-6 text-neutral-400 font-bold text-xl hover:text-white transition-colors">
                            GitHub
                        </button>
                        <button onClick={() => window.open("https://www.linkedin.com/in/timo-kwok/", "_blank")} className="w-6 h-6 text-neutral-400 font-bold text-xl hover:text-white transition-colors">
                            Linkedin
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};
