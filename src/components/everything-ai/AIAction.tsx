import { useState } from 'react';

// Using random tech/AI related shorts/videos for demo
const videos = [
    {
        title: "AI Agents",
        subtitle: "The Future of Work",
        youtubeId: "v3UBlTErZQ0", // Example ID (OpenAI Sora)
        overlayText: "AI AGENTS"
    },
    {
        title: "Generative AI",
        subtitle: "Explained in 60s",
        youtubeId: "G2fqAlgmoPo", // Example ID
        overlayText: "GEN AI"
    },
    {
        title: "Future Tools",
        subtitle: "Must have extensions",
        youtubeId: "bZQun8Y4L2A", // Example ID
        overlayText: "TOOLS"
    },
    {
        title: "Robotics",
        subtitle: "New Era Begins",
        youtubeId: "tF4DML7FIWk", // Example ID (Atlas)
        overlayText: "ROBOTS"
    }
];

const AIAction = () => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const [isMuted, setIsMuted] = useState(true);

    return (
        <section className="py-24 bg-[#F3F4F6] text-brand-dark relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
                <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-brand-lime rounded-full blur-[120px]"></div>
                <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-brand-burgundy rounded-full blur-[120px]"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-brand-dark">
                            See AI in <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-brand-lime">Action</span>
                        </h2>
                        <p className="text-gray-500 max-w-xl text-lg">
                            Short, sharp, and smart reviews of the latest AI tools you need to know.
                        </p>
                    </div>

                    <button className="mt-6 md:mt-0 px-8 py-3 rounded-full border border-gray-200 bg-white text-brand-dark font-medium hover:bg-brand-dark hover:text-white transition-all flex items-center gap-2 shadow-sm">
                        Check Our Reels On Instagram
                        <i className="ri-instagram-line"></i>
                    </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {videos.map((video, index) => {
                        const isHovered = hoveredIndex === index;
                        return (
                            <div
                                key={index}
                                className="group relative aspect-[9/16] rounded-3xl overflow-hidden cursor-pointer bg-white border border-gray-200 hover:border-brand-orange/50 transition-all duration-300 hover:shadow-xl"
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                            >
                                {/* Static Thumbnail / Overlay when NOT hovered */}
                                {!isHovered && (
                                    <>
                                        <img
                                            src={`https://img.youtube.com/vi/${video.youtubeId}/maxresdefault.jpg`}
                                            alt={video.title}
                                            className="absolute inset-0 w-full h-full object-cover opacity-90 transition-opacity duration-500 hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-black/10"></div>

                                        {/* Play Icon */}
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="w-14 h-14 rounded-full bg-white/30 backdrop-blur-md border border-white/40 flex items-center justify-center transition-all duration-300 shadow-lg group-hover:scale-110">
                                                <i className="ri-play-fill text-2xl text-white"></i>
                                            </div>
                                        </div>

                                        {/* Text Overlay */}
                                        <div className="absolute top-8 left-0 w-full text-center">
                                            <span className={`text-4xl font-black text-white drop-shadow-md uppercase tracking-wider ${index % 2 === 0 ? 'text-brand-lime' : 'text-white'}`}
                                                style={{ textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}>
                                                {video.overlayText}
                                            </span>
                                        </div>
                                    </>
                                )}

                                {/* YouTube Iframe on Hover */}
                                {isHovered && (
                                    <div className="absolute inset-0 w-full h-full bg-black">
                                        <iframe
                                            width="100%"
                                            height="100%"
                                            src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1&mute=${isMuted ? '1' : '0'}&controls=0&modestbranding=1&loop=1&playlist=${video.youtubeId}&playsinline=1&rel=0`}
                                            title={video.title}
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            style={{ pointerEvents: 'none' }} // Prevent interaction stealing hover
                                        ></iframe>
                                    </div>
                                )}

                                {/* Bottom Info (Always Visible but styled differently on hover) */}
                                <div className={`absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent pointer-events-none transition-opacity duration-300 ${isHovered ? 'opacity-0' : 'opacity-100'}`}>
                                    <h3 className="text-2xl font-bold text-white leading-tight drop-shadow-md">
                                        {video.title} <br />
                                        <span className="font-normal opacity-90 text-lg">{video.subtitle}</span>
                                    </h3>
                                </div>

                                {/* Controls on Hover */}
                                {isHovered && (
                                    <div className="absolute bottom-4 right-4 z-20 flex gap-2">
                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                setIsMuted(!isMuted);
                                            }}
                                            className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white hover:bg-brand-orange transition-colors"
                                        >
                                            {isMuted ? <i className="ri-volume-mute-fill"></i> : <i className="ri-volume-up-fill"></i>}
                                        </button>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default AIAction;
