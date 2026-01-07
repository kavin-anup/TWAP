import React, { useRef, useEffect, useState } from 'react';

const agencies = [
    {
        name: 'DataArt',
        verified: true,
        logo: 'https://images.unsplash.com/photo-1549923746-c502d488b3ea?auto=format&fit=crop&q=80&w=200',
        description: 'Since its inception in 1997, DataArt has delivered a range of innovative solutions to businesses of all sizes and industries.',
        tag: 'Direct Marketing'
    },
    {
        name: 'Moburst',
        verified: true,
        logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?auto=format&fit=crop&q=80&w=200',
        description: 'Moburst is a full-service mobile-first digital agency that propels companies into category leaders through AI-powered marketing.',
        tag: 'Custom Software Development'
    },
    {
        name: 'Appinventiv',
        verified: true,
        logo: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=200',
        description: 'Appinventiv is an IT Consulting Service company that commenced operations in 2015 with a team of 10 core members.',
        tag: 'Mobile App Development'
    },
    {
        name: 'Codewave',
        verified: true,
        logo: 'https://images.unsplash.com/photo-1611162616475-46b635cb6868?auto=format&fit=crop&q=80&w=200',
        description: 'Codewave is a design thinking led digital transformation company. Helping enterprises & entrepreneurs build manageable systems.',
        tag: 'Mobile App Development'
    },
    {
        name: 'TechFlow',
        verified: true,
        logo: 'https://images.unsplash.com/photo-1572044162444-ad6021194360?auto=format&fit=crop&q=80&w=200',
        description: 'TechFlow provides cutting-edge digital solutions for modern businesses looking to scale efficiently.',
        tag: 'Cloud Computing'
    },
    {
        name: 'BrainStorm',
        verified: true,
        logo: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=200',
        description: 'BrainStorm is a creative agency focused on branding and identity for startups and established enterprises.',
        tag: 'Branding'
    }
];

export default function AgenciesHallOfFame() {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [isPaused, setIsPaused] = useState(false);

    // Auto-scroll logic
    useEffect(() => {
        const scrollContainer = scrollRef.current;
        if (!scrollContainer) return;

        let animationFrameId: number;

        const scroll = () => {
            if (!isPaused && scrollContainer) {
                if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 3) {
                    // Reset to start (seamless loop point)
                    scrollContainer.scrollLeft = 0;
                } else {
                    scrollContainer.scrollLeft += 1; // Adjust speed here
                }
            }
            animationFrameId = requestAnimationFrame(scroll);
        };

        animationFrameId = requestAnimationFrame(scroll);

        return () => cancelAnimationFrame(animationFrameId);
    }, [isPaused]);


    const scrollLeft = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: -380, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: 380, behavior: 'smooth' });
        }
    };

    return (
        <section
            className="bg-white py-24 overflow-hidden"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-12 text-center">
                <div className="flex items-center justify-center gap-6">
                    <h2 className="text-4xl lg:text-5xl font-bold text-[#1A1B20]">Our Hall of Fame</h2>
                </div>
                <p className="mt-4 text-gray-500 max-w-2xl mx-auto text-lg">
                    These are the game-changers—the companies redefining excellence in their fields. Discover the innovators, disruptors, and visionaries.
                </p>
            </div>

            <div className="relative w-full">
                {/* Gradient Masks */}
                <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
                <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

                {/* Slider Container - Using standard scrolling instead of CSS animation */}
                <div
                    ref={scrollRef}
                    className="flex overflow-x-hidden no-scrollbar w-full"
                >
                    {/* Triple the list to allow for a significant seamless scroll area */}
                    {[...agencies, ...agencies, ...agencies].map((agency, index) => (
                        <div key={index} className="w-[350px] mx-4 flex-shrink-0">
                            <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 h-full flex flex-col group">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-12 h-12 rounded-lg bg-gray-50 overflow-hidden flex-shrink-0">
                                        <img src={agency.logo} alt={agency.name} className="w-full h-full object-cover" />
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-1">
                                            <h3 className="font-bold text-lg text-[#1A1B20]">{agency.name}</h3>
                                            {agency.verified && (
                                                <i className="ri-checkbox-circle-fill text-[#f25a1a]"></i>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                <div className="mb-6 flex-grow">
                                    <p className="text-sm text-gray-500 leading-relaxed line-clamp-3">
                                        {agency.description}
                                    </p>
                                </div>

                                <div className="mt-auto">
                                    <span className="inline-block px-3 py-1 rounded-md border border-gray-200 text-xs text-gray-500 mb-4">
                                        {agency.tag}
                                    </span>
                                    <button className="w-full bg-[#f25a1a] hover:bg-[#d14815] text-white py-3 rounded-xl font-semibold transition-colors flex items-center justify-center gap-2 group-hover:scale-[1.02] transform duration-300">
                                        <i className="ri-global-line"></i>
                                        Visit Profile
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-center gap-4 mt-8">
                <button
                    onClick={scrollLeft}
                    className="w-12 h-12 rounded-full border border-gray-200 bg-white text-gray-600 hover:bg-[#f25a1a] hover:text-white hover:border-[#f25a1a] flex items-center justify-center transition-all duration-300 shadow-sm"
                >
                    <i className="ri-arrow-left-line text-xl"></i>
                </button>
                <button
                    onClick={scrollRight}
                    className="w-12 h-12 rounded-full border border-gray-200 bg-white text-gray-600 hover:bg-[#f25a1a] hover:text-white hover:border-[#f25a1a] flex items-center justify-center transition-all duration-300 shadow-sm"
                >
                    <i className="ri-arrow-right-line text-xl"></i>
                </button>
            </div>
        </section>
    );
}
