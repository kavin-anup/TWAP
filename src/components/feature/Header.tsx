import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const menuCategories = [
  {
    id: 'trending',
    label: 'Trending Apps',
    content: [
      { title: 'AI Copywriter', desc: 'Generate marketing copy in seconds.', image: 'https://images.unsplash.com/photo-1664575602554-2087b04935a5?auto=format&fit=crop&q=80&w=400' },
      { title: 'TaskMaster Pro', desc: 'Organize your team workflow efficiently.', image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&q=80&w=400' },
    ]
  },
  {
    id: 'top-ai',
    label: 'Top AI Tools & Apps',
    content: [
      { title: 'MidJourney Guide', desc: 'Master the art of AI image generation.', image: 'https://images.unsplash.com/photo-1617791160505-6f00504e3519?auto=format&fit=crop&q=80&w=400' },
      { title: 'CodeAssistant', desc: 'Your personal AI pair programmer.', image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=400' }
    ]
  },
  {
    id: 'stories',
    label: 'Interviews & Success Stories',
    content: [
      { title: 'TechFlow Growth', desc: 'How TechFlow increased their user retention by 40% with AI.', image: 'https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&q=80&w=400' },
      { title: 'DesignHive', desc: 'Scaling from 0 to 10k users: The DesignHive growth story.', image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=400' }
    ]
  },
  {
    id: 'agency',
    label: 'Agency Feature',
    content: [
      { title: 'Top Rated Agencies', desc: 'Find the best partners for your project.', image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=400' },
      { title: 'Case Studies', desc: 'Real results from top development firms.', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=400' }
    ]
  },
  {
    id: 'resource',
    label: 'Resource Centre',
    content: [
      { title: 'Blogs', desc: 'Latest insights and trends in the tech world.', image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&q=80&w=400' },
      { title: 'Opinion Pieces', desc: 'Expert perspectives on the future of AI and development.', image: 'https://images.unsplash.com/photo-1513530534585-c7b1394c6d51?auto=format&fit=crop&q=80&w=400' },
      { title: 'AI in Use', desc: 'Real-world applications and case studies of AI integration.', image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=400' },
      { title: 'Opportunities', desc: 'Career growth, job openings, and partnership programs.', image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=400' }
    ]
  }
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDesktopMenuOpen, setIsDesktopMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('trending');

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isDesktopMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isDesktopMenuOpen]);

  return (
    <>
      <header className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
        <div className="w-full max-w-7xl">
          {/* Glassmorphism Navigation Bar */}
          <div className="bg-gray-800/40 backdrop-blur-md rounded-full border border-white/10 px-6 py-3 shadow-lg relative z-50">
            <div className="flex items-center gap-3 justify-between">
              {/* Logo */}
              <Link to="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
                <img
                  src="https://static.readdy.ai/image/19a52a0e7cd11d182286c46a940c9855/e182590b8be678e75f8d6849629e767f.png"
                  alt="The Web App Pro"
                  className="h-8 md:h-10 w-auto min-w-[100px] object-contain"
                />
              </Link>

              {/* Desktop Navigation */}
              <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
                <Link to="/" className="text-white hover:text-[#f25a1a] font-medium transition-colors text-sm lg:text-base" style={{ fontFamily: 'Manrope, sans-serif' }}>
                  Home
                </Link>
                <Link to="/products" className="text-white hover:text-[#f25a1a] font-medium transition-colors text-sm lg:text-base" style={{ fontFamily: 'Manrope, sans-serif' }}>
                  Products
                </Link>
                <Link to="/directory" className="text-white hover:text-[#f25a1a] font-medium transition-colors text-sm lg:text-base" style={{ fontFamily: 'Manrope, sans-serif' }}>
                  Directory
                </Link>
                <Link to="/reviews" className="text-white hover:text-[#f25a1a] font-medium transition-colors text-sm lg:text-base" style={{ fontFamily: 'Manrope, sans-serif' }}>
                  Reviews
                </Link>
                <Link to="/news" className="text-white hover:text-[#f25a1a] font-medium transition-colors text-sm lg:text-base" style={{ fontFamily: 'Manrope, sans-serif' }}>
                  News
                </Link>
                <Link to="/insights" className="text-white hover:text-[#f25a1a] font-medium transition-colors text-sm lg:text-base" style={{ fontFamily: 'Manrope, sans-serif' }}>
                  Insights
                </Link>
                <Link to="/services" className="text-white hover:text-[#f25a1a] font-medium transition-colors text-sm lg:text-base" style={{ fontFamily: 'Manrope, sans-serif' }}>
                  Services
                </Link>
              </nav>

              {/* CTA Button & Rich Menu */}
              <div className="flex w-full justify-end items-center gap-3">
                {/* Rich Menu Button - Visible on all devices */}
                <button
                  onClick={() => setIsDesktopMenuOpen(!isDesktopMenuOpen)}
                  className={`flex items-center justify-center w-8 h-8 lg:w-10 lg:h-10 rounded-full border border-white/10 hover:bg-white/5 transition-all duration-300 ${isDesktopMenuOpen ? 'border-[#f25a1a] text-[#f25a1a]' : 'text-white hover:border-[#f25a1a]/50 hover:text-[#f25a1a]'}`}
                >
                  <i className={`ri-${isDesktopMenuOpen ? 'close' : 'apps-2'}-line text-lg md:hidden block`}></i>
                  <i className={`ri-${isDesktopMenuOpen ? 'close' : 'menu'}-line text-xl md:block hidden`}></i>
                </button>

                {/* CTA - Hidden on mobile */}
                <Link
                  to="/submit"
                  className="hidden md:block bg-gradient-to-r from-[#f25a1a] to-[#ff7043] text-white px-5 py-2.5 rounded-full font-['Manrope'] font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 whitespace-nowrap text-sm lg:text-base"
                >
                  Submit Your App
                </Link>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden text-white p-2"
              >
                <div className="w-6 h-6 flex items-center justify-center">
                  <i className={`ri-${isMenuOpen ? 'close' : 'menu'}-line text-xl`}></i>
                </div>
              </button>
            </div>
          </div>

          {/* Desktop Menu Overlay (Rich Menu) */}
          {isDesktopMenuOpen && (
            <div className="flex fixed inset-0 z-40 items-start justify-center pt-24 pb-10 px-4">
              <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setIsDesktopMenuOpen(false)}></div>
              <div className="relative z-50 w-full max-w-5xl bg-[#1a1b20]/50 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200" style={{ height: 'min(600px, 80vh)' }}>
                <div className="flex flex-col md:flex-row h-full">
                  {/* Left Sidebar - Categories */}
                  <div className="w-full md:w-1/3 border-b md:border-b-0 md:border-r border-white/5 bg-[#131418]/50 p-6 overflow-y-auto max-h-[40%] md:max-h-full">
                    <h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-6 px-4">Menu</h3>
                    <div className="space-y-2">
                      {menuCategories.map((category) => (
                        <button
                          key={category.id}
                          onClick={() => setActiveCategory(category.id)}
                          className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-300 font-['Manrope'] font-medium text-base flex items-center justify-between group ${activeCategory === category.id
                            ? 'bg-[#f25a1a]/10 text-white'
                            : 'text-gray-400 hover:text-white hover:bg-white/5'
                            }`}
                        >
                          {category.label}
                          {activeCategory === category.id && (
                            <i className="ri-arrow-right-s-line text-[#f25a1a]"></i>
                          )}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Right Content - Cards */}
                  <div className="w-full md:w-2/3 p-8 overflow-y-auto bg-gradient-to-br from-[#1a1b20]/50 to-[#131418]/50">
                    {activeCategory === 'top-ai' ? (
                      <div className="w-full h-full relative rounded-2xl overflow-hidden group cursor-pointer border border-white/10">
                        <img
                          src={menuCategories.find(c => c.id === 'top-ai')?.content[0].image}
                          alt={menuCategories.find(c => c.id === 'top-ai')?.content[0].title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent">
                          <div className="absolute bottom-0 left-0 p-8 w-full">
                            <h4 className="text-white font-bold text-xl mb-2">{menuCategories.find(c => c.id === 'top-ai')?.content[0].title}</h4>
                            <p className="text-gray-300 mb-6 text-sm leading-relaxed max-w-md">{menuCategories.find(c => c.id === 'top-ai')?.content[0].desc}</p>
                            <button className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white px-5 py-2 rounded-full text-sm font-semibold transition-all">
                              Learn more
                            </button>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <>
                        <div className="mb-8">
                          <h3 className="text-2xl font-bold text-white mb-2">{menuCategories.find(c => c.id === activeCategory)?.label}</h3>
                          <p className="text-gray-400">Discover the best in {menuCategories.find(c => c.id === activeCategory)?.label.toLowerCase()}.</p>
                        </div>

                        <div className="grid grid-cols-2 gap-6">
                          {menuCategories.find(c => c.id === activeCategory)?.content.map((item, index) => (
                            <div key={index} className="group cursor-pointer">
                              <div className="relative aspect-video rounded-xl overflow-hidden mb-3 border border-white/5">
                                <img
                                  src={item.image}
                                  alt={item.title}
                                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-300"></div>
                              </div>
                              <h4 className="text-white font-semibold text-lg mb-1 group-hover:text-[#f25a1a] transition-colors">{item.title}</h4>
                              <p className="text-sm text-gray-400 line-clamp-2">{item.desc}</p>
                            </div>
                          ))}
                        </div>

                        {activeCategory === 'stories' && (
                          <div className="mt-8 pt-8 border-t border-white/5 flex justify-end">
                            <Link
                              to="/reviews"
                              className="flex items-center space-x-2 text-sm text-[#f25a1a] hover:text-[#ff7043] font-medium transition-colors"
                              onClick={() => setIsDesktopMenuOpen(false)}
                            >
                              <span>Read More Stories</span>
                              <i className="ri-arrow-right-line"></i>
                            </Link>
                          </div>
                        )}
                      </>
                    )}

                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-3 py-4 bg-gray-800/40 backdrop-blur-md rounded-2xl border border-white/10 shadow-lg">
              <nav className="flex flex-col space-y-2 sm:space-y-3 px-4">
                <Link
                  to="/"
                  className="text-white font-['Manrope'] font-medium hover:text-[#f25a1a] transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  to="/products"
                  className="text-white font-['Manrope'] font-medium hover:text-[#f25a1a] transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Products
                </Link>
                <Link
                  to="/directory"
                  className="text-white font-['Manrope'] font-medium hover:text-[#f25a1a] transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Directory
                </Link>
                <Link
                  to="/reviews"
                  className="text-white font-['Manrope'] font-medium hover:text-[#f25a1a] transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Reviews
                </Link>
                <Link
                  to="/news"
                  className="text-white font-['Manrope'] font-medium hover:text-[#f25a1a] transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  News
                </Link>
                <Link
                  to="/insights"
                  className="text-white font-['Manrope'] font-medium hover:text-[#f25a1a] transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Insights
                </Link>
                <Link
                  to="/services"
                  className="text-white font-['Manrope'] font-medium hover:text-[#f25a1a] transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Services
                </Link>
                <Link
                  to="/submit"
                  className="bg-gradient-to-r from-[#f25a1a] to-[#ff7043] text-white px-6 py-3 rounded-full font-['Manrope'] font-semibold hover:shadow-lg transition-all duration-300 text-center mt-2 whitespace-nowrap"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Submit Your App
                </Link>
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  );
}

