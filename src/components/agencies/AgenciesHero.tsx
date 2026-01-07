import React from 'react';

export default function AgenciesHero() {
    return (
        <section className="relative h-screen w-full overflow-hidden font-sans">
            {/* Background Image with Gradient Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1932&q=80"
                    alt="Meeting"
                    className="w-full h-full object-cover"
                />
                {/* Home Page Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#1B1B36]/90 to-[#56122D]/80 mix-blend-multiply"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 h-full flex flex-col justify-center">

                {/* Main Content Area with Glass Effect */}
                <div className="max-w-3xl pt-20 p-8 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 shadow-2xl">
                    <h1 className="text-5xl lg:text-7xl font-medium text-white leading-tight mb-8" style={{ fontFamily: 'Inter, sans-serif' }}>
                        Your Trusted
                        <br />
                        Consulting Partner
                    </h1>

                    <div className="flex items-center gap-4">
                        <button className="bg-[#f25a1a] hover:bg-[#d14815] text-white px-8 py-4 rounded-full font-medium transition-all transform hover:scale-105 flex items-center gap-2 shadow-lg shadow-[#f25a1a]/30">
                            Free Consultation
                            <div className="bg-white/20 rounded-full w-6 h-6 flex items-center justify-center">
                                <i className="ri-arrow-right-up-line text-sm"></i>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
