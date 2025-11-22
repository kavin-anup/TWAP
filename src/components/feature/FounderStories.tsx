
import { useState } from 'react';

interface Founder {
  id: number;
  name: string;
  title: string;
  company: string;
  question: string;
  answer: string;
  avatar: string;
  videoThumbnail: string;
  productName: string;
}

export default function FounderStories() {
  const [founders] = useState<Founder[]>([
    {
      id: 1,
      name: "Sarah Chen",
      title: "Founder & CEO",
      company: "MindFlow AI",
      productName: "MindFlow - AI Writing Assistant",
      question: "What inspired you to create MindFlow AI?",
      answer: "I noticed writers spending hours on first drafts instead of refining ideas. MindFlow eliminates writer's block by understanding context and generating intelligent suggestions that feel authentically yours.",
      avatar: "https://readdy.ai/api/search-image?query=Professional%20Asian%20female%20CEO%20headshot%2C%20confident%20tech%20entrepreneur%2C%20modern%20startup%20office%20background%2C%20business%20casual%20attire%2C%20warm%20smile%2C%20clean%20corporate%20portrait%2C%20professional%20lighting%2C%20innovative%20leader&width=200&height=200&seq=founder-sarah&orientation=squarish",
      videoThumbnail: "https://readdy.ai/api/search-image?query=AI%20writing%20assistant%20interface%20demonstration%2C%20modern%20software%20dashboard%20with%20text%20editing%20features%2C%20clean%20user%20interface%20design%2C%20productivity%20app%20screenshot%2C%20professional%20software%20presentation%2C%20blue%20and%20white%20color%20scheme&width=400&height=225&seq=video-mindflow&orientation=landscape"
    },
    {
      id: 2,
      name: "Marcus Rodriguez",
      title: "Co-Founder & CTO",
      company: "DataSync Pro",
      productName: "DataSync - Business Analytics Platform",
      question: "How does DataSync solve real business problems?",
      answer: "Small businesses drown in spreadsheets and disconnected tools. DataSync automatically connects all your business data sources and provides actionable insights without requiring a data science degree.",
      avatar: "https://readdy.ai/api/search-image?query=Professional%20Hispanic%20male%20founder%20headshot%2C%20tech%20entrepreneur%20portrait%2C%20modern%20office%20environment%2C%20confident%20expression%2C%20business%20casual%20shirt%2C%20clean%20corporate%20photography%2C%20innovative%20startup%20leader&width=200&height=200&seq=founder-marcus&orientation=squarish",
      videoThumbnail: "https://readdy.ai/api/search-image?query=Business%20analytics%20dashboard%20with%20charts%20and%20graphs%2C%20data%20visualization%20interface%2C%20modern%20business%20intelligence%20software%2C%20professional%20analytics%20platform%2C%20clean%20dashboard%20design%2C%20blue%20and%20orange%20color%20scheme&width=400&height=225&seq=video-datasync&orientation=landscape"
    },
    {
      id: 3,
      name: "Emily Watson",
      title: "Co-Founder & Head of Product",
      company: "EcoTrack Solutions",
      productName: "EcoTrack - Sustainability Management",
      question: "Why is sustainability tracking crucial for businesses today?",
      answer: "Companies need to measure their environmental impact not just for compliance, but for competitive advantage. EcoTrack makes sustainability data as accessible as financial metrics, driving both profit and purpose.",
      avatar: "https://readdy.ai/api/search-image?query=Professional%20female%20founder%20headshot%2C%20sustainability%20tech%20entrepreneur%2C%20modern%20eco-friendly%20office%20background%2C%20confident%20business%20leader%2C%20professional%20attire%2C%20warm%20expression%2C%20clean%20corporate%20portrait&width=200&height=200&seq=founder-emily&orientation=squarish",
      videoThumbnail: "https://readdy.ai/api/search-image?query=Sustainability%20tracking%20dashboard%20with%20environmental%20metrics%2C%20green%20technology%20interface%2C%20eco-friendly%20business%20analytics%2C%20modern%20environmental%20software%2C%20clean%20green%20and%20blue%20design%2C%20professional%20app%20interface&width=400&height=225&seq=video-ecotrack&orientation=landscape"
    }
  ]);

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-[#f7f5ef] via-white to-[#f7f5ef] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#f25a1a]/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#1F2853]/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Service Hero Section */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-block mb-6">
            <span className="px-6 py-2 bg-gradient-to-r from-[#ffcee0]/20 to-[#ffb3d6]/20 backdrop-blur-sm border border-[#ffcee0]/30 rounded-full text-[#f25a1a] text-sm font-semibold" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Full-Scale Visibility Platform
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1F2853] mb-6" style={{ fontFamily: 'Manrope, sans-serif' }}>
            Founder Stories
          </h2>
          <p className="text-xl sm:text-2xl text-gray-700 mb-4 max-w-3xl mx-auto" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Amplifying the voices of app founders
          </p>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Get featured with professional interviews, video content, and spotlight exposure that puts you and your product front and center.
          </p>
        </div>

        {/* Featured Founder (First one prominently) */}
        <div className="mb-12 lg:mb-16">
          <div 
            className="rounded-3xl overflow-hidden relative group"
            style={{
              background: 'linear-gradient(135deg, rgba(31, 40, 83, 0.05) 0%, rgba(22, 32, 64, 0.08) 100%)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.5)',
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.6)'
            }}
          >
            {/* Glassmorphism overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-white/20 to-transparent pointer-events-none"></div>
            
            <div className="grid lg:grid-cols-2 gap-0 relative z-10">
              {/* Founder Profile - Left Side */}
              <div className="p-8 lg:p-12 flex flex-col justify-center bg-gradient-to-br from-white/80 to-white/40 backdrop-blur-md">
                <div className="flex flex-col items-start mb-6">
                  {/* Large Avatar */}
                  <div className="relative mb-6 group/avatar">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#f25a1a]/30 to-[#ff7043]/20 rounded-full blur-2xl group-hover/avatar:blur-3xl transition-all duration-500"></div>
                    <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-2xl" style={{ boxShadow: '0 10px 40px rgba(242, 90, 26, 0.3)' }}>
                      <img 
                        src={founders[0].avatar}
                        alt={founders[0].name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-gradient-to-br from-[#f25a1a] to-[#ff7043] rounded-full flex items-center justify-center border-4 border-white shadow-lg">
                      <i className="ri-verified-badge-fill text-white text-xl"></i>
                    </div>
                  </div>
                  
                  <div className="space-y-2 mb-6">
                    <h3 className="text-3xl lg:text-4xl font-bold text-[#1F2853]" style={{ fontFamily: 'Manrope, sans-serif' }}>
                      {founders[0].name}
                    </h3>
                    <p className="text-xl text-[#f25a1a] font-semibold" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      {founders[0].title}
                    </p>
                    <p className="text-lg text-gray-600" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      {founders[0].company}
                    </p>
                  </div>

                  {/* Product Name */}
                  <div className="mb-6 p-4 bg-gradient-to-r from-[#ffcee0]/30 to-[#ffb3d6]/30 backdrop-blur-sm rounded-xl border border-[#ffcee0]/40">
                    <span className="text-[#1F2853] font-bold text-lg" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      {founders[0].productName}
                    </span>
                  </div>
                </div>
              </div>

              {/* Interview Content - Right Side */}
              <div className="p-8 lg:p-12 bg-white/60 backdrop-blur-md">
                <div className="mb-6">
                  <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-[#f25a1a]/10 rounded-full border border-[#f25a1a]/20">
                    <i className="ri-vidicon-line text-[#f25a1a]"></i>
                    <span className="text-[#f25a1a] font-semibold text-sm" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      Featured Interview
                    </span>
                  </div>
                  <h4 className="text-2xl lg:text-3xl font-bold text-[#1F2853] mb-4 leading-tight" style={{ fontFamily: 'Manrope, sans-serif' }}>
                    "{founders[0].question}"
                  </h4>
                </div>
                
                <p className="text-lg text-gray-700 leading-relaxed mb-8" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  {founders[0].answer}
                </p>

                {/* Video Thumbnail */}
                <div className="relative rounded-xl overflow-hidden group/video cursor-pointer" style={{ boxShadow: '0 10px 40px rgba(0, 0, 0, 0.2)' }}>
                  <img 
                    src={founders[0].videoThumbnail}
                    alt={`${founders[0].productName} demo`}
                    className="w-full h-64 object-cover group-hover/video:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent flex items-center justify-center">
                    <div className="w-20 h-20 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center shadow-2xl group-hover/video:scale-110 transition-transform duration-300" style={{ boxShadow: '0 10px 40px rgba(242, 90, 26, 0.4)' }}>
                      <div className="w-8 h-8 flex items-center justify-center text-[#f25a1a] ml-1">
                        <i className="ri-play-fill text-2xl"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Other Founders Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-12">
          {founders.slice(1).map((founder) => (
            <div 
              key={founder.id} 
              className="rounded-2xl overflow-hidden relative group"
              style={{
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.7) 100%)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.6)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.6)'
              }}
            >
              {/* Glassmorphism overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-white/20 to-transparent pointer-events-none"></div>

              <div className="relative z-10">
                {/* Video Thumbnail */}
                <div className="relative overflow-hidden">
                  <img 
                    src={founder.videoThumbnail}
                    alt={`${founder.productName} demo`}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent flex items-center justify-center group-hover:from-black/70 transition-colors">
                    <div className="w-16 h-16 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform cursor-pointer" style={{ boxShadow: '0 8px 30px rgba(242, 90, 26, 0.3)' }}>
                      <div className="w-6 h-6 flex items-center justify-center text-[#f25a1a] ml-1">
                        <i className="ri-play-fill text-xl"></i>
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="px-4 py-2 bg-gradient-to-r from-[#f25a1a] to-[#ff7043] text-white rounded-full text-sm font-semibold backdrop-blur-sm shadow-lg" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      Interview
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  {/* Founder Info */}
                  <div className="flex items-center mb-4">
                    <div className="relative mr-4">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#f25a1a]/30 to-[#ff7043]/20 rounded-full blur-lg"></div>
                      <div className="relative w-16 h-16 rounded-full overflow-hidden border-[3px] border-white shadow-lg" style={{ boxShadow: '0 4px 20px rgba(242, 90, 26, 0.3)' }}>
                        <img 
                          src={founder.avatar}
                          alt={founder.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#1F2853]" style={{ fontFamily: 'Manrope, sans-serif' }}>
                        {founder.name}
                      </h3>
                      <p className="text-sm text-gray-600" style={{ fontFamily: 'Poppins, sans-serif' }}>
                        {founder.title}
                      </p>
                    </div>
                  </div>

                  {/* Product Name */}
                  <div className="mb-4">
                    <span className="text-[#f25a1a] font-semibold text-base" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      {founder.productName}
                    </span>
                  </div>
                  
                  {/* Interview Question */}
                  <div className="mb-4">
                    <h4 className="text-[#1F2853] font-semibold mb-2 text-base leading-tight" style={{ fontFamily: 'Manrope, sans-serif' }}>
                      "{founder.question}"
                    </h4>
                    
                    <p className="text-gray-700 text-sm leading-relaxed" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      {founder.answer}
                    </p>
                  </div>
                  
                  {/* Company Badge */}
                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-200">
                    <span className="text-sm text-gray-600 font-medium" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      {founder.company}
                    </span>
                    <div className="flex items-center text-[#f25a1a] text-sm font-semibold cursor-pointer hover:text-[#d14815] transition-colors" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      Watch Full Interview
                      <div className="w-4 h-4 flex items-center justify-center ml-1">
                        <i className="ri-external-link-line"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div 
          className="text-center rounded-3xl p-8 lg:p-12 relative overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, rgba(31, 40, 83, 0.08) 0%, rgba(22, 32, 64, 0.12) 100%)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.4)',
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.6)'
          }}
        >
          {/* Glassmorphism overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-white/20 to-transparent pointer-events-none"></div>
          
          <div className="relative z-10">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1F2853] mb-4" style={{ fontFamily: 'Manrope, sans-serif' }}>
              Ready to share your founder story?
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Join our featured founders and get full-scale visibility for you and your product
            </p>
            <button 
              className="bg-gradient-to-r from-[#f25a1a] to-[#ff7043] text-white px-8 lg:px-10 py-4 lg:py-5 rounded-xl font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 whitespace-nowrap text-base lg:text-lg relative overflow-hidden group/btn" 
              style={{ 
                fontFamily: 'Poppins, sans-serif',
                boxShadow: '0 10px 30px rgba(242, 90, 26, 0.4)'
              }}
            >
              <span className="relative z-10 flex items-center gap-2">
                Share Your Story
                <i className="ri-arrow-right-line group-hover/btn:translate-x-1 transition-transform"></i>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#ff7043] to-[#f25a1a] opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
