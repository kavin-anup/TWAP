

export default function AgenciesGrid() {
    return (
        <section className="bg-white px-6 lg:px-8 py-24">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-auto lg:h-[600px]">
                    {/* Card 1 */}
                    <div className="bg-[#F8F8F8] rounded-3xl p-8 relative overflow-hidden flex flex-col justify-between group hover:shadow-xl transition-all duration-300">
                        <div className="flex justify-between items-start">
                            <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider border border-gray-200 px-3 py-1 rounded-full bg-white">Who We Are</span>
                            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center border border-gray-100 group-hover:scale-110 transition-transform cursor-pointer">
                                <i className="ri-arrow-right-up-line text-lg text-gray-800"></i>
                            </div>
                        </div>

                        <div className="relative z-10 mt-8 mb-auto">
                            <h3 className="text-3xl font-medium text-[#1A1B20] leading-tight">
                                Leading Provider of <br />
                                <span className="text-gray-500">Analytics and Financial Services</span>
                            </h3>
                        </div>

                        <div className="w-full h-64 mt-8 rounded-2xl overflow-hidden relative">
                            <img
                                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=800"
                                alt="Team meeting"
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                    </div>

                    {/* Card 2 - Middle Highlight */}
                    <div className="bg-[#1B1B36] rounded-3xl p-8 relative overflow-hidden flex flex-col justify-between group text-white hover:shadow-2xl hover:shadow-orange-500/20 transition-all duration-300">
                        <div className="relative z-10 flex flex-col h-full">
                            <div className="mb-auto">
                                <h3 className="text-4xl lg:text-5xl font-medium leading-tight mb-6">
                                    Finovate <br />
                                    Consulting <br />
                                    Named a <br />
                                    <span className="opacity-90">Agentforce Partner</span>
                                </h3>
                            </div>

                            {/* Abstract Shape Container */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-20 pointer-events-none">
                                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full fill-white">
                                    <path d="M44.7,-76.4C58.9,-69.2,71.8,-59.1,81.6,-46.6C91.4,-34.1,98.1,-19.2,95.8,-5.3C93.5,8.6,82.2,21.5,70.6,31.7C59,41.9,47.1,49.5,35.2,55.9C23.3,62.3,11.4,67.5,-1.3,69.8C-14,72,-28.9,71.3,-41.2,65.3C-53.5,59.3,-63.2,48,-71.1,36C-79,24,-85.1,11.2,-83.4,-1C-81.7,-13.2,-72.2,-24.8,-61.8,-33.5C-51.4,-42.2,-40.1,-48,-28.9,-56.9C-17.7,-65.8,-6.6,-77.8,6.8,-89.6L20.2,-101.3" transform="translate(100 100)" />
                                </svg>
                            </div>

                            {/* Inner Image - Simplified for React without complex masking issues */}
                            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-48 h-48 rounded-full overflow-hidden border-4 border-white/20 translate-x-12 group-hover:translate-x-8 transition-transform duration-500">
                                <img
                                    src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=400"
                                    alt="Award ceremony"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            <div className="flex justify-between items-end mt-auto relative z-20">
                                <span className="text-xs font-bold uppercase tracking-widest bg-white/20 backdrop-blur-md px-3 py-1 rounded-full">Recognition</span>
                                <div className="w-12 h-12 rounded-full bg-white text-[#f25a1a] flex items-center justify-center group-hover:scale-110 transition-transform cursor-pointer">
                                    <i className="ri-arrow-right-up-line text-xl"></i>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-[#F8F8F8] rounded-3xl p-8 relative overflow-hidden flex flex-col justify-between group hover:shadow-xl transition-all duration-300">
                        <div className="flex justify-between items-start">
                            <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider border border-gray-200 px-3 py-1 rounded-full bg-white">Report</span>
                            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center border border-gray-100 group-hover:scale-110 transition-transform cursor-pointer">
                                <i className="ri-arrow-right-up-line text-lg text-gray-800"></i>
                            </div>
                        </div>

                        <div className="relative z-10 mt-8 mb-auto">
                            <h3 className="text-3xl font-medium text-[#1A1B20] leading-tight">
                                2024 Diversity, Equity, <br />
                                <span className="text-gray-500">and Inclusion Report</span>
                            </h3>
                        </div>

                        <div className="w-full h-64 mt-8 rounded-2xl overflow-hidden relative">
                            <img
                                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800"
                                alt="Professional woman working"
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 object-[50%_20%]"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
