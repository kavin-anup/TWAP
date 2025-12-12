import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import RichMenu from './RichMenu';



export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isRichMenuOpen, setIsRichMenuOpen] = useState(false);


  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isRichMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isRichMenuOpen]);

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
                  onClick={() => setIsRichMenuOpen(!isRichMenuOpen)}
                  className={`flex items-center justify-center w-8 h-8 lg:w-10 lg:h-10 rounded-full border border-white/10 hover:bg-white/5 transition-all duration-300 ${isRichMenuOpen ? 'border-[#f25a1a] text-[#f25a1a]' : 'text-white hover:border-[#f25a1a]/50 hover:text-[#f25a1a]'}`}
                >
                  <i className={`ri-${isRichMenuOpen ? 'close' : 'apps-2'}-line text-lg md:hidden block`}></i>
                  <i className={`ri-${isRichMenuOpen ? 'close' : 'menu'}-line text-xl md:block hidden`}></i>
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
          <RichMenu isOpen={isRichMenuOpen} onClose={() => setIsRichMenuOpen(false)} />

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

