export default function DirectoryHero() {
  return (
    <section 
      className="relative py-20 bg-gradient-to-br from-[#1F2853] via-[#2a3a6b] to-[#1F2853] overflow-hidden"
      style={{
        backgroundImage: `url('https://readdy.ai/api/search-image?query=modern%20technology%20workspace%20with%20multiple%20screens%20showing%20various%20software%20applications%20and%20tools%2C%20professional%20office%20environment%20with%20clean%20design%2C%20blue%20and%20purple%20lighting%2C%20futuristic%20digital%20interface%20elements%2C%20high-tech%20atmosphere&width=1920&height=600&seq=directory1&orientation=landscape')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundBlendMode: 'overlay'
      }}
    >
      <div className="absolute inset-0 bg-[#1F2853]/80"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 font-manrope">
          App Directory
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto font-poppins">
          Discover the best AI-powered tools and applications. Compare features, read reviews, and find the perfect solution for your needs.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3 border border-white/20">
            <span className="text-white/80 text-sm font-medium font-poppins">
              <i className="ri-apps-line mr-2"></i>
              500+ Apps Listed
            </span>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3 border border-white/20">
            <span className="text-white/80 text-sm font-medium font-poppins">
              <i className="ri-star-line mr-2"></i>
              10,000+ Reviews
            </span>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3 border border-white/20">
            <span className="text-white/80 text-sm font-medium font-poppins">
              <i className="ri-user-line mr-2"></i>
              50,000+ Users
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}