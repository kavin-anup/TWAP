export default function TopAgency() {
  return (
    <section className="py-16 bg-[#f7f5ef] relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#1F2853]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#f25a1a]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-3xl font-bold text-center text-[#1F2853] mb-12 font-['Manrope']">
          Top Agency Of The Month
        </h2>

        <div 
          className="relative rounded-3xl p-7 sm:p-12 text-left overflow-hidden group"
          style={{
            background: 'linear-gradient(135deg, rgba(31, 40, 83, 0.95) 0%, rgba(22, 32, 64, 0.98) 50%, rgba(31, 40, 83, 0.95) 100%)',
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
            backdropFilter: 'blur(20px)',
          }}
        >
          {/* Advanced glassmorphism overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/5 to-transparent"></div>
          
          {/* Animated border glow */}
          <div className="absolute inset-0 rounded-3xl opacity-50 group-hover:opacity-100 transition-opacity duration-500">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#f25a1a]/20 via-[#f25a1a]/10 to-transparent blur-xl"></div>
          </div>

          {/* Grid pattern overlay */}
          <div 
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)',
              backgroundSize: '40px 40px'
            }}
          ></div>

          <div className="relative flex flex-wrap gap-8 items-start max-w-2xl">
            {/* Agency Logo with modern glow effect */}
            <div 
              className="relative w-24 h-24 flex-shrink-0 group/logo"
              style={{
                filter: 'drop-shadow(0 10px 30px rgba(242, 90, 26, 0.3))'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#f25a1a]/30 to-[#ff7043]/20 rounded-2xl blur-xl group-hover/logo:blur-2xl transition-all duration-500"></div>
              <div className="relative w-full h-full bg-gradient-to-br from-white/20 via-white/10 to-white/5 backdrop-blur-xl border border-white/30 rounded-2xl flex items-center justify-center shadow-2xl overflow-hidden group-hover/logo:border-[#f25a1a]/50 transition-all duration-300">
                <img
                  src="https://readdy.ai/api/search-image?query=Modern%20minimalist%20AI%20technology%20company%20logo%20design%20with%20geometric%20shapes%2C%20clean%20lines%2C%20professional%20corporate%20branding%2C%20blue%20and%20white%20color%20scheme%2C%20simple%20abstract%20symbol%20representing%20artificial%20intelligence%20and%20innovation%2C%20high-tech%20aesthetic%2C%20vector%20style%20logo%20on%20transparent%20background&width=96&height=96&seq=agency-logo-001&orientation=squarish"
                  alt="AI Innovations Studio Logo"
                  className="w-full h-full object-cover scale-110 group-hover/logo:scale-100 transition-transform duration-300"
                />
              </div>
            </div>

            <div className="flex-1 space-y-6">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#f25a1a]/20 to-[#ff7043]/20 backdrop-blur-md border border-[#f25a1a]/30 rounded-full">
                <span className="w-2 h-2 bg-[#f25a1a] rounded-full animate-pulse"></span>
                <span className="text-[#f25a1a] text-sm font-semibold font-['Poppins']">Top Rated</span>
              </div>

              <h3 className="text-3xl font-bold text-white mb-2 font-['Manrope'] bg-gradient-to-r from-white via-white to-white/80 bg-clip-text">
                AI Innovations Studio
              </h3>

              <p className="text-white/90 text-lg leading-relaxed font-['Poppins']">
                Leading AI development agency specializing in custom automation
                solutions for enterprise clients. <span className="text-[#f25a1a] font-semibold">50+ successful AI implementations.</span>
              </p>

              <div className="pt-2">
                <button 
                  className="relative group/btn bg-gradient-to-r from-[#f25a1a] to-[#ff7043] text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 whitespace-nowrap font-['Poppins'] cursor-pointer overflow-hidden"
                  style={{
                    boxShadow: '0 10px 30px rgba(242, 90, 26, 0.4), 0 0 0 0 rgba(242, 90, 26, 0.5)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = '0 15px 40px rgba(242, 90, 26, 0.6), 0 0 0 4px rgba(242, 90, 26, 0.3)';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = '0 10px 30px rgba(242, 90, 26, 0.4), 0 0 0 0 rgba(242, 90, 26, 0.5)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Visit Agency Profile
                    <svg className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#ff7043] to-[#f25a1a] opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                </button>
              </div>
            </div>
          </div>

          {/* Futuristic decorative elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#f25a1a]/20 to-transparent rounded-full blur-3xl opacity-50 group-hover:opacity-70 transition-opacity duration-500"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-[#1F2853]/30 to-transparent rounded-full blur-3xl opacity-50 group-hover:opacity-70 transition-opacity duration-500"></div>
          
          {/* Corner accent lights */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#f25a1a]/10 rounded-bl-full blur-2xl"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#1F2853]/20 rounded-tr-full blur-2xl"></div>
        </div>
      </div>
    </section>
  );
}
