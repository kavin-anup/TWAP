export default function TopAgency() {
  return (
    <section className="bg-[#f7f5ef] py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12">
        <h2 className="text-3xl font-bold text-[#1F2853] mb-10 text-left font-['Manrope']">
          Top Agency Of The Month
        </h2>

        <div className="rounded-[52px] bg-[#252c52] text-white px-6 py-10 sm:px-10 lg:px-16 lg:py-12 shadow-2xl">
          <div className="flex flex-col lg:flex-row gap-10 items-center lg:items-stretch">
            {/* Illustration cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 flex-1 w-full">
              <div className="relative rounded-[48px] h-48 sm:h-56 overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=1200&q=80"
                  alt="Creative strategy session"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent"></div>
              </div>
              <div className="relative rounded-[48px] h-48 sm:h-56 overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80"
                  alt="Product team collaboration"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent"></div>
              </div>
            </div>

            {/* Content block */}
            <div className="w-full max-w-md text-left">
              <p className="text-sm uppercase tracking-[0.25em] text-white/70 font-['Manrope'] mb-4">
                featured agency
              </p>
              <h3 className="text-3xl sm:text-4xl font-bold font-['Manrope'] mb-5">
                AI Innovations Studio
              </h3>
              <p className="text-base sm:text-lg text-white/80 leading-relaxed font-['Poppins']">
                Full-scale visibility partner for app founders. This month&apos;s spotlight goes
                to AI Innovations Studio for elevating launch campaigns with clarity, performance,
                and hands-on growth strategy tailored to ambitious product teams.
              </p>

              <button
                className="mt-10 inline-flex items-center justify-center bg-[#f25a1a] text-white px-9 py-3 rounded-full font-semibold font-['Poppins'] shadow-lg hover:bg-[#ff7635] transition-colors duration-200"
              >
                Visit agency
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
