import React from 'react';

export default function AgenciesPartnerOfMonth() {
    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="text-center mb-12">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-[#f25a1a]/10 border border-[#f25a1a]/20 text-sm font-bold text-[#f25a1a] mb-4 uppercase tracking-wider">
                        Spotlight
                    </span>
                    <h2 className="text-4xl lg:text-5xl font-bold text-[#1A1B20]">Partner of The Month</h2>
                </div>

                <div className="relative">
                    {/* Gradient Glow */}
                    <div className="absolute -top-10 -right-10 w-64 h-64 bg-[#f25a1a]/20 rounded-full blur-3xl -z-10"></div>
                    <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-[#f25a1a]/10 rounded-full blur-3xl -z-10"></div>

                    <div className="bg-white/90 backdrop-blur-xl rounded-3xl p-2 md:p-4 border border-white/50 shadow-2xl shadow-orange-500/5 flex flex-col lg:flex-row overflow-hidden relative z-10">
                        {/* Partner Profile Section */}
                        <div className="flex-1 p-6 md:p-10">
                            <div className="flex flex-col md:flex-row gap-6 items-start mb-6">
                                <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-[#1A1B20] to-black flex items-center justify-center flex-shrink-0 shadow-lg shadow-gray-200">
                                    {/* Placeholder Logo */}
                                    <span className="text-white font-bold text-xs">Crebos</span>
                                </div>
                                <div>
                                    <div className="flex items-center gap-2 mb-2 flex-wrap">
                                        <h3 className="text-2xl font-bold text-[#1A1B20]">Crebos International</h3>
                                        <i className="ri-checkbox-circle-fill text-[#f25a1a] text-xl"></i>
                                    </div>
                                    <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                                        UX/UI | AI Agents & Web/App Development
                                    </p>
                                </div>
                            </div>

                            <p className="text-gray-600 leading-relaxed mb-8 text-lg">
                                We're Crebos International, a strategy-led custom software and design partner.
                                We help ambitious companies design, build, and scale digital products that define categories.
                            </p>

                            <div className="flex flex-wrap gap-4 items-center mb-8">
                                <span className="px-4 py-2 rounded-lg bg-white/50 text-gray-600 text-sm font-medium border border-gray-100 backdrop-blur-sm">
                                    Custom Software Development
                                </span>
                                <span className="px-4 py-2 rounded-lg bg-white/50 text-gray-600 text-sm font-medium border border-gray-100 backdrop-blur-sm">
                                    Product Design
                                </span>
                            </div>

                            <div className="flex flex-wrap gap-4">
                                <button className="px-8 py-3 rounded-xl border border-[#f25a1a]/30 text-[#f25a1a] font-bold hover:bg-[#f25a1a] hover:text-white transition-all duration-300 flex items-center gap-2 hover:shadow-lg hover:shadow-orange-500/20 bg-white/50 backdrop-blur-sm">
                                    <i className="ri-user-smile-line"></i>
                                    View Profile
                                </button>
                                <button className="px-8 py-3 rounded-xl bg-gradient-to-r from-[#f25a1a] to-[#d14815] text-white font-bold hover:shadow-lg hover:shadow-orange-500/30 transition-all duration-300 flex items-center gap-2">
                                    <i className="ri-global-line"></i>
                                    Visit Website
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Feature Request CTA Section */}
                {/* <div className="w-full lg:w-[400px] bg-[#f25a1a]/5 p-8 md:p-10 flex flex-col justify-center relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-[#f25a1a]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-[#f25a1a]/20 transition-all duration-500"></div>

                        <div className="relative z-10">
                            <h4 className="text-[#f25a1a] font-bold text-sm uppercase tracking-widest mb-4">Want To Get Featured?</h4>
                            <h3 className="text-2xl font-bold text-[#1A1B20] mb-6 leading-tight">
                                Submit your business profile to bag global visibility!
                            </h3>
                            <button className="w-full py-4 rounded-xl bg-[#1A1B20] text-white font-bold hover:bg-[#f25a1a] transition-all duration-300 shadow-lg cursor-pointer">
                                Get In Touch
                            </button>
                        </div>
                    </div> */}
            </div>
        </section>
    );
}
