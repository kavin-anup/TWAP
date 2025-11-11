import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#1F2853] border-b border-white/10">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
            <img 
              src="https://static.readdy.ai/image/19a52a0e7cd11d182286c46a940c9855/e182590b8be678e75f8d6849629e767f.png" 
              alt="The Web App Pro" 
              className="h-14 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="/" className="text-[#ffcee0] hover:text-[#f25a1a] font-medium transition-colors" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Home
            </a>
            <a href="/directory" className="text-[#ffcee0] hover:text-[#f25a1a] font-medium transition-colors" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Directory
            </a>
            <a href="/reviews" className="text-[#ffcee0] hover:text-[#f25a1a] font-medium transition-colors" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Reviews
            </a>
            <a href="/news" className="text-[#ffcee0] hover:text-[#f25a1a] font-medium transition-colors" style={{ fontFamily: 'Poppins, sans-serif' }}>
              News
            </a>
            <a href="/insights" className="text-[#ffcee0] hover:text-[#f25a1a] font-medium transition-colors" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Insights
            </a>
            <a href="/services" className="text-[#ffcee0] hover:text-[#f25a1a] font-medium transition-colors" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Services
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              to="/submit"
              className="bg-gradient-to-r from-[#f25a1a] to-[#ff7043] text-white px-6 py-3 rounded-lg font-['Poppins'] font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 whitespace-nowrap"
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

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
            <nav className="flex flex-col space-y-4 px-4">
              <Link 
                to="/" 
                className="text-white font-['Manrope'] font-medium hover:text-[#ffcee0] transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/directory" 
                className="text-white font-['Manrope'] font-medium hover:text-[#ffcee0] transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Directory
              </Link>
              <Link 
                to="/reviews" 
                className="text-white font-['Manrope'] font-medium hover:text-[#ffcee0] transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Reviews
              </Link>
              <Link 
                to="/news" 
                className="text-white font-['Manrope'] font-medium hover:text-[#ffcee0] transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                News
              </Link>
              <Link 
                to="/insights" 
                className="text-white font-['Manrope'] font-medium hover:text-[#ffcee0] transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Insights
              </Link>
              <Link 
                to="/services" 
                className="text-white font-['Manrope'] font-medium hover:text-[#ffcee0] transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                to="/submit"
                className="bg-gradient-to-r from-[#f25a1a] to-[#ff7043] text-white px-6 py-3 rounded-lg font-['Poppins'] font-semibold hover:shadow-lg transition-all duration-300 text-center mt-4 whitespace-nowrap"
                onClick={() => setIsMenuOpen(false)}
              >
                Submit Your App
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
