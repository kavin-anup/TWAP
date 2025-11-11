
interface AppCardProps {
  name: string;
  category: string;
  rating: number;
  description: string;
  logo: string;
  featured?: boolean;
}

export default function AppCard({ name, category, rating, description, logo, featured }: AppCardProps) {
  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <i key={i} className="ri-star-fill text-[#f25a1a]"></i>
      );
    }

    if (hasHalfStar) {
      stars.push(
        <i key="half" className="ri-star-half-fill text-[#f25a1a]"></i>
      );
    }

    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <i key={`empty-${i}`} className="ri-star-line text-gray-300"></i>
      );
    }

    return stars;
  };

  return (
    <div className={`bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-6 border border-gray-100 cursor-pointer ${
      featured ? 'ring-2 ring-[#f25a1a] ring-opacity-20' : ''
    }`}>
      {featured && (
        <div className="inline-block bg-[#f25a1a] text-white text-xs font-medium px-3 py-1 rounded-full mb-4">
          Featured
        </div>
      )}
      
      <div className="flex items-start space-x-4">
        {/* App Logo */}
        <div className="flex-shrink-0">
          <img
            src={logo}
            alt={`${name} logo`}
            className="w-16 h-16 rounded-lg object-cover border border-gray-200"
          />
        </div>

        {/* App Info */}
        <div className="flex-1 min-w-0">
          <h3 className="text-xl font-bold text-[#1F2853] mb-1" style={{ fontFamily: 'Inter, sans-serif' }}>
            {name}
          </h3>
          
          <p className="text-[#1F2853]/60 text-sm mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
            {category}
          </p>

          {/* Rating */}
          <div className="flex items-center space-x-2 mb-3">
            <div className="flex space-x-1">
              {renderStars(rating)}
            </div>
            <span className="text-[#1F2853] font-medium text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
              {rating}
            </span>
          </div>

          {/* Description */}
          <p className="text-[#1F2853]/70 text-sm leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
            {description}
          </p>
        </div>
      </div>

      {/* View Details Button */}
      <div className="mt-4 pt-4 border-t border-gray-100">
        <button className="w-full bg-[#f7f5ef] hover:bg-[#f25a1a] text-[#1F2853] hover:text-white py-2 px-4 rounded-lg font-medium transition-all cursor-pointer whitespace-nowrap">
          View Details
        </button>
      </div>
    </div>
  );
}