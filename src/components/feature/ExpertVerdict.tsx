
import { useState } from 'react';

export default function ExpertVerdict() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1F2853] mb-6" style={{ fontFamily: 'Manrope, sans-serif' }}>
              Our Verdict: We Test AI Tools
            </h2>
            
            <p className="text-lg text-gray-600 mb-8" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Our expert team rigorously tests every AI tool to provide you with honest, 
              unbiased reviews that help you make informed decisions.
            </p>
          </div>

          {/* Right Content - Expert Profile */}
          <div className="bg-[#f7f5ef] rounded-lg p-8">
            <div className="inline-block bg-[#1F2853] text-white px-4 py-2 rounded-md text-sm font-medium mb-6">
              Editor's Pick
            </div>
            
            <div className="flex items-start gap-4">
              <img
                src="https://readdy.ai/api/search-image?query=Professional%20expert%20headshot%2C%20middle-aged%20technology%20analyst%2C%20confident%20expression%2C%20business%20attire%2C%20clean%20background%2C%20professional%20portrait%20photography%2C%20tech%20industry%20expert%2C%20trustworthy%20appearance&width=80&height=80&seq=expert-profile&orientation=squarish"
                alt="Expert Profile"
                className="w-16 h-16 rounded-full object-cover"
              />
              <div className="flex-1">
                <h3 className="font-bold text-[#1F2853] mb-1" style={{ fontFamily: 'Manrope, sans-serif' }}>
                  Sarah Mitchell
                </h3>
                <p className="text-sm text-gray-600 mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Lead Product Reviewer
                </p>
                <p className="text-sm text-[#f25a1a] font-medium mb-3" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Reviewing: ChatGPT Plus
                </p>
                <p className="text-gray-700 text-sm leading-relaxed" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  "ChatGPT Plus delivers exceptional performance with faster response times and priority access. The advanced reasoning capabilities make it worth the subscription for professionals who rely on AI for complex tasks."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
