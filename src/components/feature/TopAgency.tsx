import { Star } from 'lucide-react';

export default function TopAgency() {
  return (
    <section className="bg-[#f7f5ef] py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12">
        <h2 className="text-3xl font-bold text-[#1F2853] mb-10 text-left font-['Manrope']">
          Top Agencies Of The Month
        </h2>

        <div className="rounded-[52px] bg-[#252c52] text-white px-6 py-10 sm:px-10 lg:px-16 lg:py-12 shadow-2xl">
          <div className="flex flex-col lg:flex-row gap-10 items-center lg:items-stretch">
            {/* Illustration cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 flex-1 w-full">
              {/* Agency 1 */}
              <div className="relative rounded-[48px] h-64 sm:h-72 overflow-hidden shadow-xl group">
                <img
                  src="/assets/ai_innovations_studio.png"
                  alt="AI Innovations Studio"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent">
                  <div className="absolute bottom-0 left-0 p-6">
                    <div className="flex gap-1 mb-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <h4 className="text-xl font-bold font-['Manrope'] text-white">
                      AI Innovations Studio
                    </h4>
                    <p className="text-sm text-white/80 font-['Poppins']">
                      San Francisco, CA
                    </p>
                  </div>
                </div>
              </div>

              {/* Agency 2 */}
              <div className="relative rounded-[48px] h-64 sm:h-72 overflow-hidden shadow-xl group">
                <img
                  src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=80"
                  alt="NextGen Digital"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent">
                  <div className="absolute bottom-0 left-0 p-6">
                    <div className="flex gap-1 mb-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <h4 className="text-xl font-bold font-['Manrope'] text-white">
                      NextGen Digital
                    </h4>
                    <p className="text-sm text-white/80 font-['Poppins']">
                      Austin, TX
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Content block */}
            <div className="w-full max-w-md text-left flex flex-col justify-center">
              <p className="text-sm uppercase tracking-[0.25em] text-white/70 font-['Manrope'] mb-4">
                featured agencies
              </p>
              <h3 className="text-3xl sm:text-4xl font-bold font-['Manrope'] mb-5">
                Leading the Future
              </h3>
              <p className="text-base sm:text-lg text-white/80 leading-relaxed font-['Poppins']">
                This month, we spotlight two exceptional studios redefining the digital landscape.
                <span className="font-semibold text-white"> AI Innovations Studio</span> and
                <span className="font-semibold text-white"> NextGen Digital</span> have demonstrated
                outstanding creativity and technical prowess, delivering high-impact solutions for
                ambitious product teams worldwide.
              </p>

              <button
                className="mt-10 inline-flex items-center justify-center bg-[#f25a1a] text-white px-9 py-3 rounded-full font-semibold font-['Poppins'] shadow-lg hover:bg-[#ff7635] transition-colors duration-200 w-fit"
              >
                View all agencies
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
