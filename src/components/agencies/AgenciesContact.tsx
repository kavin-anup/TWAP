import React from 'react';

export default function AgenciesContact() {
    return (
        <section className="bg-white pb-24">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="rounded-[40px] overflow-hidden bg-[#Fdfdfd] shadow-2xl flex flex-col lg:flex-row">
                    {/* Form Section */}
                    <div className="w-full lg:w-1/2 p-12 lg:p-16 bg-[#Fdfdfd]">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-gray-100 text-xs font-bold text-gray-500 mb-6 uppercase tracking-wider">
                            Schedule Consultation
                        </span>
                        <h2 className="text-4xl font-bold text-[#153e35] mb-4">Let's Connect</h2>
                        <p className="text-gray-500 mb-10">Connect with our experts for a free consultation and tailored solutions.</p>

                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Your Name</label>
                                    <input type="text" placeholder="e.g. John Smith" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-[#ccff00] transition-colors" />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Email Address</label>
                                    <input type="email" placeholder="e.g. john@email.com" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-[#ccff00] transition-colors" />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Phone Number</label>
                                    <input type="tel" placeholder="e.g. +1 222 444 66" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-[#ccff00] transition-colors" />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Company Name</label>
                                    <input type="text" placeholder="e.g. Exocor" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-[#ccff00] transition-colors" />
                                </div>
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Your Message</label>
                                <textarea rows={4} placeholder="Type here..." className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-[#ccff00] transition-colors resize-none"></textarea>
                            </div>

                            <button type="submit" className="w-full sm:w-auto bg-[#ccff00] hover:bg-[#bbe600] text-black px-8 py-4 rounded-full font-bold transition-all cursor-pointer shadow-lg shadow-[#ccff00]/20">
                                Schedule a Free Consultation
                            </button>
                        </form>
                    </div>

                    {/* Image/Info Section */}
                    <div className="w-full lg:w-1/2 relative bg-[#F4D09C] min-h-[500px]">
                        <img
                            src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80"
                            alt="Meeting"
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                        {/* Floating Info Box */}
                        <div className="absolute bottom-10 left-10 right-10 bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-xl flex items-center gap-4">
                            <div className="w-12 h-12 bg-[#ccff00] rounded-full flex items-center justify-center shrink-0">
                                <i className="ri-phone-fill text-2xl text-[#153e35]"></i>
                            </div>
                            <div>
                                <p className="text-xs text-gray-500 font-medium mb-1">Call us at <span className="underline decoration-dotted text-gray-800">(021) 500 0000</span> or fill out our form, and we'll contact you within one business day.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
