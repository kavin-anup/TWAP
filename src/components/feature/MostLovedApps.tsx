import { useState } from 'react';

interface LovedApp {
  rank: number;
  name: string;
  description: string;
  votes: number;
  category: string;
  weeklyGrowth: number;
  badge?: string;
}

const mockLovedApps: LovedApp[] = [
  {
    rank: 1,
    name: "Claude AI",
    description: "Advanced AI assistant for complex reasoning",
    votes: 12847,
    category: "AI Tools",
    weeklyGrowth: 23,
    badge: "🔥 Trending"
  },
  {
    rank: 2,
    name: "Perplexity AI",
    description: "AI-powered search and research assistant",
    votes: 11293,
    category: "Research",
    weeklyGrowth: 18,
    badge: "⚡ Rising Fast"
  },
  {
    rank: 3,
    name: "Linear",
    description: "Modern issue tracking and project management",
    votes: 9876,
    category: "Productivity",
    weeklyGrowth: 15
  },
  {
    rank: 4,
    name: "Cursor",
    description: "AI-powered code editor for developers",
    votes: 8654,
    category: "Development",
    weeklyGrowth: 31,
    badge: "🚀 Hot"
  },
  {
    rank: 5,
    name: "Gamma",
    description: "AI presentation maker with beautiful designs",
    votes: 7432,
    category: "Design",
    weeklyGrowth: 12
  },
  {
    rank: 6,
    name: "Superhuman",
    description: "The fastest email experience ever made",
    votes: 6891,
    category: "Productivity",
    weeklyGrowth: 8
  }
];

export default function MostLovedApps() {
  const [showAll, setShowAll] = useState(false);
  const displayedApps = showAll ? mockLovedApps : mockLovedApps.slice(0, 4);

  const formatVotes = (votes: number) => {
    if (votes >= 1000) {
      return `${(votes / 1000).toFixed(1)}k`;
    }
    return votes.toString();
  };

  return (
    <section className="py-16" style={{ backgroundColor: '#f7f5ef' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4" style={{ color: '#1F2853', fontFamily: 'Manrope, sans-serif' }}>
            Most Loved Apps This Week
          </h2>
          <p className="text-xl text-gray-600" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Voted by users, for users
          </p>
        </div>

        {/* Leaderboard */}
        <div className="max-w-4xl mx-auto">
          <div 
            className="rounded-2xl p-8 border border-white/20 backdrop-blur-lg"
            style={{
              background: 'linear-gradient(135deg, rgba(31, 40, 83, 0.95) 0%, rgba(31, 40, 83, 0.85) 100%)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
            }}
          >
            <div className="space-y-6">
              {displayedApps.map((app, index) => (
                <div 
                  key={app.rank} 
                  className="flex items-center gap-6 p-6 rounded-xl transition-all duration-300 cursor-pointer hover:scale-[1.02]"
                  style={{
                    background: 'rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.2)'
                  }}
                >
                  {/* Rank */}
                  <div className="flex items-center justify-center w-16 h-16 rounded-full font-bold text-xl relative"
                       style={{ 
                         background: index < 3 
                           ? 'linear-gradient(135deg, #ffcee0 0%, #ffb3d6 100%)' 
                           : 'rgba(255, 255, 255, 0.2)',
                         color: index < 3 ? '#1F2853' : '#ffffff'
                       }}>
                    #{app.rank}
                    {index < 3 && (
                      <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full flex items-center justify-center text-xs"
                           style={{ background: '#ffcee0' }}>
                        {index === 0 ? '👑' : index === 1 ? '🥈' : '🥉'}
                      </div>
                    )}
                  </div>
                  
                  {/* App Info */}
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-semibold text-xl text-white" style={{ fontFamily: 'Manrope, sans-serif' }}>
                        {app.name}
                      </h3>
                      {app.badge && (
                        <span className="px-3 py-1 rounded-full text-xs font-medium text-white"
                              style={{ background: '#ffcee0', color: '#1F2853' }}>
                          {app.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-white/80 text-sm mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      {app.description}
                    </p>
                    <div className="flex items-center gap-4 text-xs text-white/60">
                      <span style={{ fontFamily: 'Poppins, sans-serif' }}>{app.category}</span>
                      <span className="flex items-center gap-1">
                        <i className="ri-arrow-up-line text-green-400"></i>
                        +{app.weeklyGrowth}% this week
                      </span>
                    </div>
                  </div>
                  
                  {/* Votes */}
                  <div className="text-right">
                    <div className="flex items-center gap-2 mb-1">
                      <i className="ri-heart-fill text-red-400 text-lg"></i>
                      <span className="text-2xl font-bold text-white" style={{ fontFamily: 'Manrope, sans-serif' }}>
                        {formatVotes(app.votes)}
                      </span>
                    </div>
                    <p className="text-white/60 text-xs" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      votes
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Show More Button */}
            <div className="mt-8 text-center">
              <button 
                onClick={() => setShowAll(!showAll)}
                className="px-8 py-3 rounded-lg font-medium transition-all duration-300 whitespace-nowrap hover:scale-105"
                style={{ 
                  background: 'linear-gradient(135deg, #ffcee0 0%, #ffb3d6 100%)',
                  color: '#1F2853',
                  fontFamily: 'Poppins, sans-serif',
                  boxShadow: '0 4px 15px rgba(255, 206, 224, 0.3)'
                }}
              >
                {showAll ? 'Show Less' : 'View All Loved Apps'}
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center p-6 rounded-xl"
               style={{ 
                 background: 'rgba(255, 255, 255, 0.8)',
                 backdropFilter: 'blur(10px)',
                 border: '1px solid rgba(255, 255, 255, 0.3)'
               }}>
            <div className="text-3xl font-bold mb-2" style={{ color: '#1F2853', fontFamily: 'Manrope, sans-serif' }}>
              50K+
            </div>
            <p className="text-gray-600" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Total Votes This Week
            </p>
          </div>
          
          <div className="text-center p-6 rounded-xl"
               style={{ 
                 background: 'rgba(255, 255, 255, 0.8)',
                 backdropFilter: 'blur(10px)',
                 border: '1px solid rgba(255, 255, 255, 0.3)'
               }}>
            <div className="text-3xl font-bold mb-2" style={{ color: '#ffcee0', fontFamily: 'Manrope, sans-serif' }}>
              127
            </div>
            <p className="text-gray-600" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Apps Competing
            </p>
          </div>
          
          <div className="text-center p-6 rounded-xl"
               style={{ 
                 background: 'rgba(255, 255, 255, 0.8)',
                 backdropFilter: 'blur(10px)',
                 border: '1px solid rgba(255, 255, 255, 0.3)'
               }}>
            <div className="text-3xl font-bold mb-2" style={{ color: '#1F2853', fontFamily: 'Manrope, sans-serif' }}>
              24H
            </div>
            <p className="text-gray-600" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Voting Updates
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}