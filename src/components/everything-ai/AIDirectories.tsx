const refinedDirectories = [
    {
        title: "AI Agent Development",
        description: "Top 50+ Agencies specializing in autonomous agents and multi-agent systems.",
        count: "50+",
        image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=800", // Abstract Nodes
        accent: "border-brand-orange",
        textAccent: "text-brand-orange",
        icon: "ri-robot-2-fill"
    },
    {
        title: "Healthcare AI Systems",
        description: "Verified partners building HIPAA-compliant medical AI solutions.",
        count: "35+",
        image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=800", // Medical abstract
        accent: "border-[#5D5CDE]",
        textAccent: "text-[#5D5CDE]",
        icon: "ri-pulse-line"
    },
    {
        title: "Conversational AI & NLP",
        description: "Leaders in Chatbots, Voice AI, and Large Language Model integration.",
        count: "40+",
        image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=800", // Waveform/Code
        accent: "border-[#1B5E50]",
        textAccent: "text-[#1B5E50]",
        icon: "ri-chat-voice-fill"
    },
    {
        title: "Automotive AI Solutions",
        description: "Pioneers in self-driving tech, ADAS, and smart cockpit systems.",
        count: "20+",
        image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=800", // Car abstract
        accent: "border-[#E63946]",
        textAccent: "text-[#E63946]",
        icon: "ri-steering-2-fill"
    }
];

const AIDirectories = () => {
    return (
        <section className="py-28 bg-[#F5F5F7] relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-lime/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                    <div className="max-w-2xl">
                        <div className="flex items-center gap-2 mb-4">
                            <span className="h-[1px] w-8 bg-brand-orange"></span>
                            <span className="text-sm font-bold tracking-widest uppercase text-brand-dark">Exclusive Intel</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-brand-dark leading-tight">
                            Verified AI Service <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-brand-burgundy">Providers Directory</span>
                        </h2>
                    </div>

                    <div className="flex gap-4">
                        <button className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-black hover:text-white transition-colors">
                            <i className="ri-arrow-left-line text-xl"></i>
                        </button>
                        <button className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-black hover:text-white transition-colors">
                            <i className="ri-arrow-right-line text-xl"></i>
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {refinedDirectories.map((item, index) => (
                        <div key={index} className="group relative h-[450px] rounded-[2rem] overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500">

                            {/* Background Image */}
                            <div className="absolute inset-0 w-full h-full">
                                <div className="absolute inset-0 bg-brand-dark/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0"
                                />
                                {/* Gradient Overlay for text readability */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-90 transition-opacity duration-500"></div>
                            </div>

                            {/* Animated Border Frame */}
                            <div className={`absolute inset-4 rounded-3xl border border-white/20 z-20 transition-all duration-500 group-hover:inset-0 group-hover:rounded-[2rem] group-hover:border-white/0`}></div>

                            {/* Active Border Highlight */}
                            <div className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-${item.accent.replace('border-', '')} to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 z-30`}></div>


                            {/* Floating Icon */}
                            <div className="absolute top-8 right-8 z-30">
                                <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white group-hover:bg-brand-orange group-hover:border-brand-orange transition-colors duration-300">
                                    <i className={`${item.icon} text-2xl`}></i>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="absolute bottom-0 left-0 w-full p-8 z-30 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">

                                <h3 className="text-2xl font-bold text-white mb-2 leading-tight">
                                    {item.title}
                                </h3>
                                <p className="text-gray-300 text-sm mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 line-clamp-2">
                                    {item.description}
                                </p>

                                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                                    <div className="flex flex-col">
                                        <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400">Agencies</span>
                                        <span className={`text-lg font-bold text-white ${item.textAccent}`}>{item.count}</span>
                                    </div>

                                    <div className="w-10 h-10 rounded-full bg-brand-lime flex items-center justify-center text-black group-hover:bg-white transition-colors">
                                        <i className="ri-arrow-right-up-line"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AIDirectories;
