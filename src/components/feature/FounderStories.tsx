
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
      title: "CEO & Co-founder",
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
      title: "Founder & CTO",
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
      title: "Founder & Head of Product",
      company: "EcoTrack Solutions",
      productName: "EcoTrack - Sustainability Management",
      question: "Why is sustainability tracking crucial for businesses today?",
      answer: "Companies need to measure their environmental impact not just for compliance, but for competitive advantage. EcoTrack makes sustainability data as accessible as financial metrics, driving both profit and purpose.",
      avatar: "https://readdy.ai/api/search-image?query=Professional%20female%20founder%20headshot%2C%20sustainability%20tech%20entrepreneur%2C%20modern%20eco-friendly%20office%20background%2C%20confident%20business%20leader%2C%20professional%20attire%2C%20warm%20expression%2C%20clean%20corporate%20portrait&width=200&height=200&seq=founder-emily&orientation=squarish",
      videoThumbnail: "https://readdy.ai/api/search-image?query=Sustainability%20tracking%20dashboard%20with%20environmental%20metrics%2C%20green%20technology%20interface%2C%20eco-friendly%20business%20analytics%2C%20modern%20environmental%20software%2C%20clean%20green%20and%20blue%20design%2C%20professional%20app%20interface&width=400&height=225&seq=video-ecotrack&orientation=landscape"
    }
  ]);

  return (
    <section className="py-16 bg-gradient-to-br from-[#f7f5ef] to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1F2853] mb-4" style={{ fontFamily: 'Manrope, sans-serif' }}>
            Founder Stories
          </h2>
          <p className="text-lg text-gray-600 mb-12" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Straight from the minds behind the apps
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {founders.map((founder) => (
            <div key={founder.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
              {/* Video Thumbnail */}
              <div className="relative overflow-hidden">
                <img 
                  src={founder.videoThumbnail}
                  alt={`${founder.productName} demo`}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center group-hover:bg-black/30 transition-colors">
                  <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform cursor-pointer">
                    <div className="w-6 h-6 flex items-center justify-center text-[#f25a1a]">
                      <i className="ri-play-fill text-xl"></i>
                    </div>
                  </div>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="bg-[#f25a1a] text-white px-3 py-1 rounded-full text-sm font-medium">
                    Interview
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                {/* Founder Info */}
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#f25a1a] mr-4">
                    <img 
                      src={founder.avatar}
                      alt={founder.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#1F2853]" style={{ fontFamily: 'Manrope, sans-serif' }}>
                      {founder.name}
                    </h3>
                    <p className="text-sm text-gray-600" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      {founder.title}
                    </p>
                  </div>
                </div>

                {/* Product Name */}
                <div className="mb-4">
                  <span className="text-[#f25a1a] font-semibold text-sm" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    {founder.productName}
                  </span>
                </div>
                
                {/* Interview Question */}
                <div className="mb-4">
                  <h4 className="text-[#1F2853] font-semibold mb-2 text-sm" style={{ fontFamily: 'Manrope, sans-serif' }}>
                    "{founder.question}"
                  </h4>
                  
                  <p className="text-gray-700 text-sm leading-relaxed" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    {founder.answer}
                  </p>
                </div>
                
                {/* Company Badge */}
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
                  <span className="text-xs text-gray-500 font-medium" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    {founder.company}
                  </span>
                  <div className="flex items-center text-[#f25a1a] text-xs font-medium cursor-pointer hover:text-[#d14815] transition-colors" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    Watch Full Interview
                    <div className="w-3 h-3 flex items-center justify-center ml-1">
                      <i className="ri-external-link-line"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-[#f25a1a] to-[#ff7043] text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 whitespace-nowrap" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Share Your Story
          </button>
        </div>
      </div>
    </section>
  );
}
