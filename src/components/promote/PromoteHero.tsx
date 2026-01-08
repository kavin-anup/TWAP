import { useEffect, useState } from 'react';

const PromoteHero = () => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-t from-brand-dark to-brand-burgundy/10 overflow-hidden pt-20">
            {/* Cyber Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f29372e_1px,transparent_1px),linear-gradient(to_bottom,#1f29372e_1px,transparent_1px)] bg-[size:40px_40px] opacity-20"></div>

            {/* Floating Cyber Particles */}
            <div className="absolute z-[2] inset-0 overflow-hidden pointer-events-none">
                {[...Array(50)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute bg-brand-lime rounded-full opacity-0 animate-particle-float"
                        style={{
                            width: Math.random() * 4 + 2 + 'px',
                            height: Math.random() * 4 + 2 + 'px',
                            top: Math.random() * 100 + '%',
                            left: Math.random() * 100 + '%',
                            animationDelay: Math.random() * 5 + 's',
                            animationDuration: Math.random() * 10 + 10 + 's'
                        }}
                    ></div>
                ))}
            </div>

            {/* Scanning Radar Effect */}
            {/* <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505] opacity-80 pointer-events-none"></div>
            <div className="absolute top-0 left-0 w-full h-1 bg-brand-orange/20 shadow-[0_0_20px_rgba(242,90,26,0.3)] animate-scan-line pointer-events-none"></div> */}

            {/* Central Neural Hub */}
            <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-8 w-full h-[800px] flex items-center justify-center">

                {/* Connection Lines (SVG Layer) */}
                <div className="absolute inset-0 pointer-events-none z-10">
                    <svg className="w-full h-full">
                        <defs>
                            <linearGradient id="grad-orange" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#f25a1a" stopOpacity="0" />
                                <stop offset="50%" stopColor="#f25a1a" stopOpacity="0.5" />
                                <stop offset="100%" stopColor="#f25a1a" stopOpacity="0" />
                            </linearGradient>
                        </defs>
                        {/* Lines connecting center to nodes - dynamically drawn in CSS or simple SVG paths */}
                        {/* These paths assume a fixed layout relative to the center 800x800 container. 
                             Adjust coordinates based on node positions. 
                             Center is roughly 50% 50% */}
                    </svg>
                </div>

                {/* Main Core Processor */}
                <div className={`relative z-30 flex flex-col items-center justify-center transition-all duration-1000 transform ${mounted ? 'scale-100 opacity-100' : 'scale-90 opacity-0'}`}>
                    {/* Ring Animations */}
                    <div className="absolute w-[500px] h-[500px] border-2 border-brand-lime rounded-full animate-[spin_30s_linear_infinite] opacity-30 border-dashed"></div>
                    <div className="absolute w-[450px] h-[450px] border border-brand-lime rounded-full animate-[spin_15s_linear_infinite_reverse] opacity-30"></div>
                    <div className="absolute w-[600px] h-[600px] border border-gray-900 rounded-full opacity-20"></div>

                    {/* Core Content */}
                    <div className="bg-[#0a0a0b]/80 backdrop-blur-xl border border-gray-800 p-12 rounded-3xl text-center relative shadow-[0_0_60px_rgba(0,0,0,0.5)] group hover:border-brand-orange/30 transition-colors">

                        {/* Card Background Image */}
                        <div className="absolute rounded-3xl overflow-hidden inset-0 z-0 pointer-events-none">
                            <img
                                src="https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&q=80&w=1000"
                                alt="AI Pattern"
                                className="w-full h-full object-cover opacity-80"
                            />
                            <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0b]/90 via-[#0a0a0b]/50 to-[#0a0a0b]/90"></div>
                        </div>

                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gray-900 border border-gray-700 rounded-full text-[10px] text-brand-orange tracking-widest uppercase mb-4 font-mono z-20">
                            System Active
                        </div>

                        <h1 className="text-6xl md:text-8xl mb-2 tracking-tighter !leading-tight relative z-10 capitalize text-white/70">
                            The <br />
                            <span className="">Method</span>
                        </h1>
                        <div className="h-1 w-24 bg-brand-orange mx-auto my-6 rounded-full shadow-[0_0_15px_rgba(242,90,26,0.5)] relative z-10"></div>
                        <p className="text-gray-500 font-mono text-sm tracking-widest uppercase relative z-10">
                            &lt; Neural Optimization /&gt;
                        </p>
                    </div>
                </div>

                {/* Neural Nodes (Icons) */}
                {/* Positions are relative to the Container */}

                {/* Node 1: Top Center - Intelligence */}
                <div className={`absolute z-[30] top-5 md:-top-8 left-1/2 -translate-x-1/2 transition-all duration-500 delay-100 ${mounted ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'}`}>
                    <div className="flex flex-col items-center group">
                        <div className="w-[1px] h-20 bg-gradient-to-b from-transparent via-red-500/50 to-red-500 mb-2 opacity-50 grou-hover:opacity-100 transition-opacity"></div>
                        <div className="relative p-6 bg-[#0a0a0b] border border-gray-800 rounded-2xl hover:border-red-500 hover:shadow-[0_0_30px_rgba(239,68,68,0.2)] transition-all group-hover:-translate-y-2 cursor-pointer">
                            <i className="ri-brain-line text-3xl text-red-500"></i>
                            <div className="absolute md:block hidden -right-16 top-0 text-[10px] text-red-500 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                                SCANNING...
                            </div>
                        </div>
                        <div className="mt-2 md:block hidden text-xs font-mono text-gray-500 uppercase tracking-widest group-hover:text-red-500 transition-colors">Verification</div>
                    </div>
                </div>

                {/* Node 2: Top Right - Speed */}
                <div className={`absolute top-1/3 -right-4 lg:right-20 transition-all duration-500 delay-200 ${mounted ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
                    <div className="flex flex-row items-center group">
                        <div className="relative p-6 bg-[#0a0a0b] border border-gray-800 rounded-2xl hover:border-yellow-500 hover:shadow-[0_0_30px_rgba(234,179,8,0.2)] transition-all group-hover:translate-x-2 cursor-pointer">
                            <i className="ri-rocket-2-line text-3xl text-yellow-500"></i>
                            <div className="absolute md:block hidden -top-6 left-0 text-[10px] text-yellow-500 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                                VELOCITY: MAX
                            </div>
                        </div>
                        <div className="w-20 h-[1px] bg-gradient-to-l from-transparent via-yellow-500/50 to-yellow-500 ml-2 opacity-50"></div>
                        <div className="ml-4 md:block hidden text-xs font-mono text-gray-500 uppercase tracking-widest group-hover:text-yellow-500 transition-colors -rotate-90 origin-left">Ratings</div>
                    </div>
                </div>

                {/* Node 3: Bottom Right - Analysis */}
                <div className={`absolute bottom-32 right-10 lg:right-40 transition-all duration-500 delay-300 ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                    <div className="flex flex-col items-center group">
                        <div className="relative p-6 bg-[#0a0a0b] border border-gray-800 rounded-2xl hover:border-teal-500 hover:shadow-[0_0_30px_rgba(20,184,166,0.2)] transition-all group-hover:translate-y-2 cursor-pointer">
                            <i className="ri-microscope-line text-3xl text-teal-500"></i>
                        </div>
                        <div className="w-[1px] h-20 bg-gradient-to-t from-transparent via-teal-500/50 to-teal-500 mt-2 opacity-50"></div>
                        <div className="absolute md:block hidden -left-20 top-1/2 -translate-y-1/2 text-xs font-mono text-gray-500 uppercase tracking-widest group-hover:text-teal-500 transition-colors text-right">
                            Deep<br />Analysis
                        </div>
                    </div>
                </div>

                {/* Node 4: Bottom Left - Discovery */}
                <div className={`absolute bottom-32 left-10 lg:left-40 transition-all duration-500 delay-400 ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                    <div className="flex flex-col items-center group">
                        <div className="relative p-6 bg-[#0a0a0b] border border-gray-800 rounded-2xl hover:border-brand-lime hover:shadow-[0_0_30px_rgba(59,130,246,0.2)] transition-all group-hover:translate-y-2 cursor-pointer">
                            <i className="ri-flashlight-line text-3xl text-brand-lime"></i>
                            <div className="absolute md:block hidden -bottom-8 left-0 w-full text-center text-[10px] text-brand-lime font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                                101001
                            </div>
                        </div>
                        <div className="w-[1px] h-20 bg-gradient-to-t from-transparent via-brand-lime/50 to-brand-lime mt-2 opacity-50"></div>
                        <div className="absolute md:block hidden -right-20 top-1/2 -translate-y-1/2 text-xs font-mono text-gray-500 uppercase tracking-widest group-hover:text-brand-lime transition-colors text-left">
                            Pro<br />Insights
                        </div>
                    </div>
                </div>

                {/* Node 5: Top Left - Featured */}
                <div className={`absolute top-1/3 -left-4 lg:left-20 transition-all duration-500 delay-500 ${mounted ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
                    <div className="flex flex-row-reverse items-center group">
                        <div className="relative p-6 bg-[#0a0a0b] border border-gray-800 rounded-2xl hover:border-purple-500 hover:shadow-[0_0_30px_rgba(168,85,247,0.2)] transition-all group-hover:-translate-x-2 cursor-pointer">
                            <i className="ri-star-line text-3xl text-purple-500"></i>
                        </div>
                        <div className="w-20 h-[1px] bg-gradient-to-r from-transparent via-purple-500/50 to-purple-500 mr-2 opacity-50"></div>
                        <div className="mr-4 md:block hidden text-xs font-mono text-gray-500 uppercase tracking-widest group-hover:text-purple-500 transition-colors rotate-90 origin-right">Featured</div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default PromoteHero;
