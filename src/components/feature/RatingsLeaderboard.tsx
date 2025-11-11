
import { useState } from 'react';

interface AppRating {
  rank: number;
  name: string;
  description: string;
  rating: number;
  category: string;
}

const mockRatings: AppRating[] = [
  {
    rank: 1,
    name: "UX Pilot",
    description: "Advanced AI conversational assistant",
    rating: 4.9,
    category: "AI Tools"
  },
  {
    rank: 2,
    name: "Midjourney",
    description: "AI-powered image generation tool",
    rating: 4.7,
    category: "Design"
  },
  {
    rank: 3,
    name: "Notion AI",
    description: "Smart workspace with AI features",
    rating: 4.5,
    category: "Productivity"
  },
  {
    rank: 4,
    name: "ChatGPT Plus",
    description: "Enhanced conversational AI platform",
    rating: 4.8,
    category: "AI Tools"
  },
  {
    rank: 5,
    name: "Figma AI",
    description: "Design collaboration with AI assistance",
    rating: 4.6,
    category: "Design"
  }
];

export default function RatingsLeaderboard() {
  const [showAll, setShowAll] = useState(false);
  const displayedRatings = showAll ? mockRatings : mockRatings.slice(0, 3);

  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    return (
      <div className="flex items-center gap-1">
        {[...Array(fullStars)].map((_, i) => (
          <i key={`full-${i}`} className="ri-star-fill text-yellow-400 text-sm"></i>
        ))}
        {hasHalfStar && <i className="ri-star-half-fill text-yellow-400 text-sm"></i>}
        {[...Array(emptyStars)].map((_, i) => (
          <i key={`empty-${i}`} className="ri-star-line text-gray-300 text-sm"></i>
        ))}
        <span className="text-sm text-gray-600 ml-1 font-medium">{rating}</span>
      </div>
    );
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Leaderboard */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-8 h-full">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 font-manrope">
                The Web App Pro Ratings Leaderboard
              </h2>
              
              <div className="space-y-6">
                {displayedRatings.map((app) => (
                  <div key={app.rank} className="flex items-center gap-6 p-4 rounded-xl hover:bg-gray-50 transition-colors cursor-pointer">
                    <div className="flex items-center justify-center w-12 h-12 bg-blue-100 text-blue-600 rounded-full font-bold text-lg font-poppins">
                      #{app.rank}
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg text-gray-900 font-manrope">{app.name}</h3>
                      <p className="text-gray-600 text-sm font-poppins">{app.description}</p>
                    </div>
                    
                    <div className="text-right">
                      {renderStars(app.rating)}
                      <span className="text-xs text-gray-500 mt-1 block font-poppins">{app.category}</span>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 text-center">
                <button 
                  onClick={() => setShowAll(!showAll)}
                  className="px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg font-medium transition-colors whitespace-nowrap font-poppins"
                >
                  {showAll ? 'Show Less' : 'View All App Ratings'}
                </button>
              </div>
            </div>
          </div>

          {/* Promote Your App */}
          <div className="lg:col-span-1">
            <div 
              className="rounded-2xl p-8 border border-white/20 hover:border-white/30 transition-all duration-300 h-full flex flex-col"
              style={{
                background: 'linear-gradient(135deg, rgba(31, 40, 83, 0.95) 0%, rgba(31, 40, 83, 0.85) 100%)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
              }}
            >
              <h3 className="text-2xl font-bold text-white mb-4 font-manrope">
                Promote Your App with Us
              </h3>
              <p className="text-white/80 mb-6 font-poppins">
                Get featured on the homepage, in our newsletter, and at the top of your category.
              </p>
              
              {/* 16:9 Image Placeholder */}
              <div className="mb-6 flex-1 min-h-[200px]">
                <img 
                  src="https://static.readdy.ai/image/19a52a0e7cd11d182286c46a940c9855/3a498c2854159ba8aef56ee2066bbcd2.jpeg"
                  alt="Promote your app"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              
              <div className="mt-auto">
                <button 
                  className="w-full text-[#1F2853] py-4 px-6 rounded-lg font-semibold transition-all duration-300 mb-4 whitespace-nowrap font-poppins hover:scale-105 hover:shadow-lg"
                  style={{
                    background: 'linear-gradient(135deg, #b9ed2a 0%, #a5d426 50%, #91bb22 100%)',
                    boxShadow: '0 4px 15px rgba(185, 237, 42, 0.3)'
                  }}
                >
                  Promote My App
                </button>
                
                <button className="w-full text-[#b9ed2a] hover:text-white py-2 font-medium transition-colors whitespace-nowrap font-poppins">
                  See Pricing
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
