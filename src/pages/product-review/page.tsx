import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';

export default function ProductReviewPage() {
  const product = {
    name: "Seat Maker",
    category: "Lifestyle",
    rating: 5.0,
    icon: "https://upload.wikimedia.org/wikipedia/commons/9/9d/Brave_lion_icon.svg", // Placeholder
    image: "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?auto=format&fit=crop&w=1200&q=80",
    reviewTitle: "Seat Maker Review | Is This the ONLY Seat Chart App You'll Ever Need?",
    content: [
      "While planning an event, be it a wedding, a summit, or even a big group dinner with friends, the most dreaded part of the planning is often the seating chart. It's often the last, most frustrating puzzle piece, turning celebration into a headache. I have experienced this firsthand, supervising an event planner for our annual party. We have spent so much effort on spreadsheets, trying to avoid putting rivals at the same table, and this was no less than a nightmare!",
      "While searching for \"easy ways to overcome the seating chart problem,\" I came across the Seat Maker app and decided to use it. For this annual party with over 300 attendees, what used to take me hours, I managed in a fraction of the time, all from my iPad. The drag-and-drop felt like magic, transforming the most stressful part of event planning.",
      "If you've ever wrestled with seating assignments, you're in the right place. In this Seat Maker app review, we're diving deep to see if it can finally end your seating chart struggles!"
    ],
    pros: [
      "Effortless design with drag-and-drop functionality for guests and tables",
      "Supports round, square, or rectangular tables and allows for customization of table names, colors, and seating styles",
      "Supports an unlimited number of tables and guests, suitable for events of any size",
      "Works completely offline with no account, login, or internet connection required, ensuring data privacy",
      "Features an option to shuffle seating arrangements as per the users' convenience",
      "Seating plans can be easily shared via QR code, Messages, or email"
    ],
    cons: [
      "Currently available only on iPhone (iOS), limiting access for Android users or those who prefer desktop",
      "No mention of integration with other event management platforms or guest list software, which might require manual data entry"
    ],
    standoutFeatures: [
      {
        title: "1. Intuitive Drag-and-Drop Interface",
        description: "This feature is where the magic of easy event planning truly begins. Forget complex software or endless manual adjustments; Seat Maker allows you to effortlessly design your event space. You can visually drag and drop tables and guests into position directly on your screen."
      }
    ]
  };

  return (
    <div className="min-h-screen bg-[#fffbf5] font-['Poppins']">
      <Header />
      <main className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Top Header Section */}
          <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 mb-8">
            <div className="flex flex-col sm:flex-row items-start justify-between gap-6">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-2xl bg-[#007AFF] flex items-center justify-center p-3">
                  <i className="ri-armchair-fill text-white text-3xl"></i>
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-[#1F2853] font-['Manrope'] mb-1">
                    {product.name}
                  </h1>
                  <span className="inline-block px-3 py-1 rounded-full border border-gray-200 text-xs font-medium text-gray-500 mb-4">
                    {product.category}
                  </span>
                  <p className="text-sm text-gray-500 max-w-xl leading-relaxed">
                    Discover if the Seat Maker app lives up to the hype! Our comprehensive review covers everything worth knowing!
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-end gap-4">
                <div className="bg-white border border-amber-200 rounded-xl p-3 shadow-sm flex flex-col items-center min-w-[120px]">
                  <div className="flex items-center gap-1 mb-1">
                    <i className="ri-verified-badge-fill text-amber-400"></i>
                    <span className="text-[10px] font-bold uppercase tracking-wide text-amber-700">WAS Certified Rating</span>
                  </div>
                  <div className="text-2xl font-bold text-[#1F2853]">{product.rating} <span className="text-sm font-normal text-gray-400">out of 5</span></div>
                  <div className="flex text-amber-400 text-sm">
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                  </div>
                </div>
                
                <div className="flex flex-col items-end gap-2 mt-4">
                    <span className="text-xs text-gray-400 font-medium">Available on:</span>
                    <i className="ri-apple-fill text-2xl"></i>
                </div>
              </div>
            </div>
            
            <div className="mt-6">
                <button className="bg-[#E50914] text-white px-6 py-2.5 rounded-lg font-bold text-sm hover:bg-[#c40812] transition-colors shadow-lg shadow-red-100 flex items-center gap-2">
                    Explore Seat Maker <i className="ri-arrow-right-up-line"></i>
                </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left Column - Review Content */}
            <div className="lg:col-span-8">
              <h2 className="text-3xl font-bold text-[#1F2853] font-['Manrope'] mb-6 leading-tight">
                {product.reviewTitle}
              </h2>

              {/* Featured Image */}
              <div className="rounded-3xl overflow-hidden mb-8 shadow-sm border border-gray-100">
                <img 
                  src={product.image} 
                  alt="App Interface" 
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Intro Text */}
              <div className="space-y-6 text-gray-700 leading-relaxed mb-12 text-sm sm:text-base">
                {product.content.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>

              {/* Pros & Cons */}
              <div className="mb-12">
                <h3 className="text-xl font-bold text-[#1F2853] mb-6 font-['Manrope']">Pros and Cons of {product.name}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Pros */}
                  <div>
                    <div className="bg-[#E8F5E9] px-4 py-2 rounded-t-lg border-l-4 border-[#4CAF50] mb-4">
                      <span className="font-bold text-[#2E7D32] text-sm">Pros</span>
                    </div>
                    <ul className="space-y-6">
                      {product.pros.map((pro, index) => (
                        <li key={index} className="flex items-start gap-3 pb-6 border-b border-dashed border-gray-200 last:border-0">
                          <div className="w-5 h-5 rounded-full border border-[#4CAF50] flex items-center justify-center mt-0.5 flex-shrink-0 text-[#4CAF50]">
                            <i className="ri-thumb-up-fill text-xs"></i>
                          </div>
                          <span className="text-xs sm:text-sm text-gray-600 leading-relaxed">{pro}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Cons */}
                  <div>
                    <div className="bg-[#FFEBEE] px-4 py-2 rounded-t-lg border-l-4 border-[#EF5350] mb-4">
                      <span className="font-bold text-[#C62828] text-sm">Cons</span>
                    </div>
                    <ul className="space-y-6">
                      {product.cons.map((con, index) => (
                        <li key={index} className="flex items-start gap-3 pb-6 border-b border-dashed border-gray-200 last:border-0">
                          <div className="w-5 h-5 rounded-full border border-[#EF5350] flex items-center justify-center mt-0.5 flex-shrink-0 text-[#EF5350]">
                            <i className="ri-thumb-down-fill text-xs"></i>
                          </div>
                          <span className="text-xs sm:text-sm text-gray-600 leading-relaxed">{con}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Standout Features */}
              <div className="mb-12">
                <h3 className="text-xl font-bold text-[#1F2853] mb-6 font-['Manrope']">{product.name} App's Standout Features</h3>
                <p className="text-gray-700 mb-8 text-sm">
                    So, how does this party and wedding seating chart app turn those seating nightmares into a dream? Founder Austin Frankel explains his motivation:
                    <br /><br />
                    "Seat Maker was built because I needed it. I wanted something fast and simple."
                    <br /><br />
                    All thanks to its suite of incredibly smart and user-friendly features. From intuitive design tools to privacy-first functionality, let's dive into what makes this app a true standout for event planners of all kinds.
                </p>
                
                {/* <div className="space-y-8">
                    {product.standoutFeatures.map((feature, idx) => (
                        <div key={idx}>
                            <h4 className="text-lg font-bold text-[#1F2853] mb-3 font-['Manrope']">{feature.title}</h4>
                            <p className="text-gray-700 text-sm leading-relaxed">{feature.description}</p>
                        </div>
                    ))}
                </div> */}
              </div>
            </div>

            {/* Right Column - Sidebar */}
            <div className="lg:col-span-4 space-y-6">
              {/* Table of Contents Widget */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <h4 className="font-bold text-[#1F2853] text-lg border-b-2 border-black pb-2 mb-4 font-['Manrope']">Table Of Contents</h4>
                <ul className="space-y-4 text-xs sm:text-sm text-gray-500">
                    <li className="cursor-pointer hover:text-[#f25a1a] transition-colors">Pros and Cons of Seat Maker</li>
                    <li className="cursor-pointer hover:text-[#f25a1a] transition-colors">Seat Maker App's Standout Features</li>
                    <li className="cursor-pointer hover:text-[#f25a1a] transition-colors">Who is the Seat Maker App Designed For?</li>
                    <li className="cursor-pointer hover:text-[#f25a1a] transition-colors">Seat Maker App in the Spotlight | Awards & Recognitions</li>
                    <li className="cursor-pointer hover:text-[#f25a1a] transition-colors">What can the Users Expect in the Future from the Seat Maker App?</li>
                </ul>
              </div>

              {/* Let Your Product Take Center Stage Widget */}
              <div className="bg-[#dcfce7] rounded-2xl p-6 shadow-sm overflow-hidden relative">
                <div className="mb-4 relative z-10">
                    <i className="ri-brain-line text-4xl text-[#1F2853]"></i>
                    <i className="ri-lightbulb-flash-line text-xl text-amber-500 absolute top-0 right-1/2 translate-x-8"></i>
                </div>
                <h4 className="font-bold text-[#1F2853] text-lg mb-6 font-['Manrope'] leading-tight relative z-10">
                    Let Your Product Take the Center Stage with Our Review
                </h4>
                <button className="w-full bg-[#E50914] text-white py-3 rounded-lg font-bold text-sm hover:bg-[#c40812] transition-colors shadow-md relative z-10">
                    Get In Touch
                </button>
                
                {/* Decorative background elements */}
                <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-[#bbf7d0] rounded-full opacity-50"></div>
                <div className="absolute -left-5 -top-5 w-20 h-20 bg-[#bbf7d0] rounded-full opacity-50"></div>
              </div>

            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

