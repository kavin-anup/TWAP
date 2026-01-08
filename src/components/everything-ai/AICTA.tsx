// import React from 'react';

const AICTA = () => {
    return (
        <section className="py-10 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="relative rounded-[3rem] p-12 md:p-12 text-center overflow-hidden group">

                    {/* Dark Crystal Background */}
                    <div className="absolute inset-0 bg-brand-dark transition-all duration-500">
                        {/* Animated Mesh Grid */}
                        <div className="absolute inset-0 opacity-20"
                            style={{
                                backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)`,
                                backgroundSize: '40px 40px'
                            }}
                        ></div>

                        {/* Glowing Orbs */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-orange/20 rounded-full blur-[100px] animate-pulse"></div>
                        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-lime/10 rounded-full blur-[80px]"></div>
                        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-burgundy/20 rounded-full blur-[80px]"></div>
                    </div>

                    {/* Decorative Rings */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/15 rounded-full animate-[spin_20s_linear_infinite]"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/15 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>

                    {/* Content */}
                    <div className="relative z-10 max-w-4xl mx-auto">
                        <div className="inline-block mb-6">
                            <span className="py-2 px-6 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-brand-lime font-mono text-sm tracking-widest uppercase shadow-lg shadow-brand-lime/10">
                                System Status: Ready to Launch
                            </span>
                        </div>

                        <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tighter leading-none drop-shadow-2xl">
                            Unlock the <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange via-white to-brand-lime animate-gradient bg-300%">
                                Next Dimension
                            </span>
                        </h2>

                        <p className="text-gray-400 text-xl md:text-2xl mb-12 max-w-2xl mx-auto font-light leading-relaxed">
                            Don't just adapt to the future. <span className="text-white font-medium">Create it.</span><br />
                            Join the elite circle of AI-native enterprises today.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                            <button className="px-10 py-5 rounded-full border border-white/10 bg-brand-orange backdrop-blur-md text-white font-medium hover:bg-white/10 transition-all flex items-center gap-3 group">

                                Start Transformation
                            </button>
                        </div>
                    </div>

                    {/* Floating Abstract Elements */}
                    <div className="absolute top-20 left-20 w-16 h-16 border border-white/10 rounded-xl rotate-12 bg-white/5 backdrop-blur-sm animate-bounce duration-[3000ms]"></div>
                    <div className="absolute bottom-20 right-20 w-24 h-24 border border-brand-orange/20 rounded-full bg-brand-orange/5 backdrop-blur-sm animate-pulse"></div>

                </div>
            </div>
        </section>
    );
};

export default AICTA;
