
export default function Footer() {
  return (
    <footer className="bg-[#1F2853] text-[#f7f5ef]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold text-[#f7f5ef] mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
              The Web App Pro
            </h3>
            <p className="text-[#f7f5ef]/80 mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
              Discover, compare, and promote the best AI-powered tools that matter for your business.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-[#f7f5ef] hover:text-[#f25a1a] transition-colors cursor-pointer">
                <div className="w-6 h-6 flex items-center justify-center">
                  <i className="ri-twitter-fill"></i>
                </div>
              </a>
              <a href="#" className="text-[#f7f5ef] hover:text-[#f25a1a] transition-colors cursor-pointer">
                <div className="w-6 h-6 flex items-center justify-center">
                  <i className="ri-linkedin-fill"></i>
                </div>
              </a>
              <a href="#" className="text-[#f7f5ef] hover:text-[#f25a1a] transition-colors cursor-pointer">
                <div className="w-6 h-6 flex items-center justify-center">
                  <i className="ri-github-fill"></i>
                </div>
              </a>
              <a href="#" className="text-[#f7f5ef] hover:text-[#f25a1a] transition-colors cursor-pointer">
                <div className="w-6 h-6 flex items-center justify-center">
                  <i className="ri-youtube-fill"></i>
                </div>
              </a>
            </div>
          </div>

          {/* Reviews & Directory */}
          <div>
            <h4 className="text-lg font-semibold text-[#f7f5ef] mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
              Reviews & Directory
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="/reviews" className="text-[#f7f5ef]/80 hover:text-[#f25a1a] transition-colors cursor-pointer">
                  App Reviews
                </a>
              </li>
              <li>
                <a href="/directory" className="text-[#f7f5ef]/80 hover:text-[#f25a1a] transition-colors cursor-pointer">
                  Review Directory
                </a>
              </li>
              <li>
                <a href="/submit" className="text-[#f7f5ef]/80 hover:text-[#f25a1a] transition-colors cursor-pointer">
                  Submit App
                </a>
              </li>
              <li>
                <a href="/categories" className="text-[#f7f5ef]/80 hover:text-[#f25a1a] transition-colors cursor-pointer">
                  Categories
                </a>
              </li>
            </ul>
          </div>

          {/* Services & Resources */}
          <div>
            <h4 className="text-lg font-semibold text-[#f7f5ef] mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
              Services & Resources
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="/services" className="text-[#f7f5ef]/80 hover:text-[#f25a1a] transition-colors cursor-pointer">
                  Services
                </a>
              </li>
              <li>
                <a href="/insights" className="text-[#f7f5ef]/80 hover:text-[#f25a1a] transition-colors cursor-pointer">
                  Insights & Blog
                </a>
              </li>
              <li>
                <a href="/news" className="text-[#f7f5ef]/80 hover:text-[#f25a1a] transition-colors cursor-pointer">
                  News
                </a>
              </li>
              <li>
                <a href="/automation" className="text-[#f7f5ef]/80 hover:text-[#f25a1a] transition-colors cursor-pointer">
                  AI Automation Help
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Support */}
          <div>
            <h4 className="text-lg font-semibold text-[#f7f5ef] mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
              Contact & Support
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="/contact" className="text-[#f7f5ef]/80 hover:text-[#f25a1a] transition-colors cursor-pointer">
                  Contact Team
                </a>
              </li>
              <li>
                <a href="/about" className="text-[#f7f5ef]/80 hover:text-[#f25a1a] transition-colors cursor-pointer">
                  About Us
                </a>
              </li>
              <li>
                <a href="/privacy" className="text-[#f7f5ef]/80 hover:text-[#f25a1a] transition-colors cursor-pointer">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms" className="text-[#f7f5ef]/80 hover:text-[#f25a1a] transition-colors cursor-pointer">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-[#f7f5ef]/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-[#f7f5ef]/60 text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
            © 2024 The Web App Pro. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
